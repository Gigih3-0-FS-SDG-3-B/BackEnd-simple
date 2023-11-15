import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import router from "./routes.js";
import swaggerSpec from "./swagger.js";
import swaggerUi from "swagger-ui-express";
import morgan from "morgan";
import cron from "node-cron";
import { updateOrderJob } from "./jobs/orderJob.js";


// Server configuration
const app = express();
const PORT = 5000;

// Middleware Registration
app.use(morgan('combined')); 
app.use(cors());
app.use(bodyParser.json());

// Routes Registration
app.use("/api/", router);
app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));


// Cron Job
cron.schedule('*/10 * * * * *', updateOrderJob);

app.listen(PORT, () => {
  console.log(`app listening on port ${PORT}`);
});
