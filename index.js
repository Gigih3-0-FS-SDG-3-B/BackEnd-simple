import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import router from "./routes.js";
import { prismaMiddleware, withPrisma } from "./middlewares/prismaMiddleware.js";
import { queryOrderStatus } from "./repositories/orderStatus.js";

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(prismaMiddleware);
app.use("/api/", router);

withPrisma(queryOrderStatus)
  .then((result) => {
    console.log(result); // Access the result of the function
  })
  .catch((error) => {
    console.error('An error occurred:', error);
  });

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
