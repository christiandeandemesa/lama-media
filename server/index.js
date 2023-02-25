import express from "express";

import authRoute from "./routes/authRoute.js";
import commentRoute from "./routes/commentRoute.js";
import likeRoute from "./routes/likeRoute.js";
import postRoute from "./routes/postRoute.js";
import userRoute from "./routes/userRoute.js";

const app = express();

app.use("/api/auth", authRoute);
app.use("/api/comments", commentRoute);
app.use("/api/likes", likeRoute);
app.use("/api/posts", postRoute);
app.use("/api/users", userRoute);

app.listen(8800, () => {
  console.log("Server working!");
});
