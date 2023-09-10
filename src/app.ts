import "dotenv/config";
import express from "express";

const app = express();

const PORT = process.env.APP_PORT || 4000; // default port

app.listen(PORT, () => {
  console.log("Application running at port " + PORT);
});
