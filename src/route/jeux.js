import express from "express";
import { PrismaClient } from "@prisma/client";
import createError from "http-errors"
import jeuxValidation from "../jeuxValidator.js";

const router = express.Router()
const prisma = new PrismaClient();


router.patch('/upload', async (req, res, next) => {
    let modifyData;
    try {
        modifyData = jeuxValidation.parse(req.body)
    } catch (error) {
        return res.status(400).json({ errors: error.issues })
    }
    const id = await prisma.jeux.findFirst({
        where: {
            id: modifyData.id
        }
    })
    // on va verifier si le mail de la personne est bon , sinon il peut pas modifier son mot de passe
    if (!id) return next(createError(200, "Vérifiez l'existence de ce jeux "));

    await prisma.jeux.update({
        where: {
            id: modifyData.id
        },
        data: {

            Title: modifyData.Title,
            Description: modifyData.Description,
            Picture: modifyData.Picture,
            lien: modifyData.lien,
            groupe: {
                connect: {
                    id: modifyData.groupe_id
                }
            }
        }
    })
        .then(() => {
            res.json({ "message": "Modification de la page" })
        })
})

router.post('/jeux', async (req, res, next) => {
    let jeuxData;
    jeuxData = jeuxValidation.parse(req.body)
    let jeux = await prisma.jeux.create({
        data: {
            Title: jeuxData.Title,
            Description: jeuxData.Description,
            Picture: jeuxData.Picture,
            lien: jeuxData.lien,
            groupe: {
                connect: {
                    id: jeuxData.groupe_id

                }
            }
        }

    })
    res.json(jeux)
    console.log(jeux)

})

router.get('/jeux', async (req, res) => {
    let jeux = await prisma.jeux.findMany({
        include: {
            groupe: true
        }
    })
    res.json(jeux)
})



export default router;