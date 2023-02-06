import express from "express";
import { PrismaClient } from "@prisma/client";
import createError from "http-errors"

import jeux from './route/jeux.js'

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))

const port = 3500

 
app.use('/',jeux)


// run the server 
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });