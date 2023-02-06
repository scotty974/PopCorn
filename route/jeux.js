import express from "express";
import { PrismaClient } from "@prisma/client";
import createError from "http-errors"
import jeuxValidation from "../jeuxValidator.js";
 
const router = express.Router()
const prisma = new PrismaClient();



router.post('/jeux',async (req,res,next)=>{
   let jeuxData;
   jeuxData =  jeuxValidation.parse(req.body)
   const jeux = await prisma.jeux.create({
        data:{
            Title : jeuxData.Title,
            Description : jeuxData.Description,
            Picture : jeuxData.Picture,
            Workers : jeuxData.Worker 
        }
   })
   res.json(jeux)
})




export default router;