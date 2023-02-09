import express from "express";
import cors from 'cors';
import jeux from './route/jeux.js'
import groupe from './route/groupe.js'
import * as dotenv from 'dotenv'

dotenv.config()

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const port = process.env.API_PORT

app.use(
  cors({
    origin: [process.env.CORS_ORIGIN ?? '*'],
  })
);
app.use('/', jeux)
app.use('/', groupe)

// run the server
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});