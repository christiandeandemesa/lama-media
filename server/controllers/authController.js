import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import dotenv from "dotenv";

import { connection } from "../configs/db.js";

dotenv.config();

// Registers a user.
export const register = (req, res) => {
  const { username, email, password, name } = req.body;
  const q = "SELECT * FROM users WHERE username = ?";

  connection.query(q, [username], (err, data) => {
    if (err) return res.status(500).json(err);
    if (data.length) return res.status(409).json("User already exists!");

    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(password, salt);

    const q =
      "INSERT INTO users (`username`,`email`,`password`,`name`) VALUE (?)";
    const values = [username, email, hashedPassword, name];

    // Placing the values directly creates a "Column count doesn't match value count at row 1" error.
    connection.query(q, [values], (err, data) => {
      if (err) return res.status(500).json(err);
      else return res.status(200).json("User has been created!");
    });
  });
};

// Logs in a user.
export const login = (req, res) => {
  const q = "SELECT * FROM users WHERE username = ?";

  connection.query(q, [req.body.username], (err, data) => {
    if (err) return res.status(500).json(err);
    if (data.length === 0) return res.status(404).json("User not found!");

    const checkPassword = bcrypt.compareSync(
      req.body.password,
      data[0].password
    );
    if (!checkPassword)
      return res.status(400).json("Wrong username or password!");

    const token = jwt.sign({ id: data[0].id }, process.env.JWT_SECRET);
    const { password, ...otherData } = data[0];

    res
      .cookie("accessToken", token, {
        httpOnly: true,
      })
      .status(200)
      .json(otherData);
  });
};

// Logs out a user.
export const logout = (req, res) => {
  res
    .clearCookie("accessToken", {
      secure: true,
      sameSite: "none",
    })
    .status(200)
    .json("User has been logged out!");
};
