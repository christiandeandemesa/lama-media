import mysql from "mysql";
import dotenv from "dotenv";

dotenv.config();

// Connects to MySQL database.
export const connection = mysql.createConnection({
  host: "localhost",
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: "mern_media",
});

// Checks if there is an error during connection to MYSQL database.
connection.connect((err) => {
  if (err) console.log(err);
  else console.log("MySQL connected!");
});
