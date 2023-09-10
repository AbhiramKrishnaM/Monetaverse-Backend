import "dotenv/config";
import express from "express";

const app = express();

app.get("/hey", (req, res) => {
  res.send("Hey pal, i am abhiram");
});

const PORT = process.env.APP_PORT || 4000; // default port

app.listen(PORT, () => {
  console.log("Application running at port " + PORT);
});
