import express from "express";
import { PrismaClient } from "@prisma/client";
import createError from "http-errors"

import jeux from './route/jeux.js'
import groupe from './route/groupe.js'
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))

const port = 3500

 
app.use('/',jeux)
app.use('/',groupe)

// run the server 
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });