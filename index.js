import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import router from "./routes.js";
import swaggerSpec from "./swagger.js";
import swaggerUi from "swagger-ui-express";

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

app.use("/api/", router);
app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
