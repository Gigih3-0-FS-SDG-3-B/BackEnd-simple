import express, { query } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import router from './routes.js';
import { PrismaClient } from '@prisma/client'
import { queryOrderStatus } from './repositories/orderStatus.js';

export const prisma = new PrismaClient()

const app = express()
const port = 3000

app.use(cors())
app.use(bodyParser.json());


app.use('/', router);

queryOrderStatus().then((data) => {
    console.log(data)
})

app.listen(port, () => {
    console.log(`app listening on port ${port}`)
})

