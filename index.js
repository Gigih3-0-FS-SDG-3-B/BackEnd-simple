import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import router from "./routes.js";

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());
app.use("/api/", router);

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
