import express from "express";
import { PrismaClient } from "@prisma/client";
import createError from "http-errors"
import groupeValidation from "../groupeValidator.js";

const router = express.Router()
const prisma = new PrismaClient();

router.patch('/uploadGroupe', async (req, res, next) => {
    let modifyData;
    try {
        modifyData = groupeValidation.parse(req.body)
    } catch (error) {
        return res.status(400).json({ errors: error.issues })
    }
    const id = await prisma.groupe.findFirst({
        where: {
            id: modifyData.id
        }
    })
    // on va verifier si le mail de la personne est bon , sinon il peut pas modifier son mot de passe
    if (!id) return next(createError(200, "Vérifiez l'existence de ce groupe "));

    await prisma.groupe.update({
        where: {
            id: modifyData.id
        },
        data: {

            name: modifyData.name,
            logo: modifyData.logo

        }
    })
        .then(() => {
            res.json({ "message": "Modification de la page" })
        })
})

router.post('/groupe', async (req, res) => {
    let groupData;
    groupData = groupeValidation.parse(req.body)
    let group = await prisma.groupe.create({
        data: {
            name: groupData.name,
            logo: groupData.logo,

        }
    })
    res.json(group)
})




export default router;