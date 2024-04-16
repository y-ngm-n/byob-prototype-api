import crawler from "./crawl";
import express from "express";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", async (req, res) => {
  const result = await crawler.run();
  res.json(result);
});

app.listen(8000);