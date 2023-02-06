import express from "express";
import { PrismaClient } from "@prisma/client";
import createError from "http-errors"
import jeuxValidation from "../jeuxValidator.js";
 
const router = express.Router()
const prisma = new PrismaClient();



router.post('/jeux',async (req,res,next)=>{
   let jeuxData;
   jeuxData =  jeuxValidation.parse(req.body)
  let jeux =  await prisma.jeux.create({
        data:{
            Title : jeuxData.Title,
            Description : jeuxData.Description,
            Picture : jeuxData.Picture,
            lien : jeuxData.lien,
            groupe:{
                connect:{
                    id : jeuxData.groupe_id
                    
                }
            }
        }
        
   })
   res.json(jeux)
   console.log(jeux)
   
})




export default router;