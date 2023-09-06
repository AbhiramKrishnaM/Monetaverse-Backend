import "dotenv/config";
import Express from "express";

const app = Express();

const PORT = process.env.APP_PORT || 4000; // default port

app.listen(PORT, () => {
  console.log("Application running at port " + PORT);
});
