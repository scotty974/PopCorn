import express from "express";
import { PrismaClient } from "@prisma/client";
import createError from "http-errors"
import groupeValidation from "../groupeValidator.js";

const router = express.Router()
const prisma = new PrismaClient();



router.post('/groupe', async(req,res)=>{
    let groupData;
    groupData = groupeValidation.parse(req.body)
    let group = await prisma.groupe.create({
       data:{
        name : groupData.name,
        logo : groupData.logo,
       
       }
    })
    res.json(group)
})




export default router;