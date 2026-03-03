import express from "express"
const router = express.Router();

router.get("/", async(_req, res) => {
    res.render("paginas/pagina-inicial")
})

router.get("/NTM/sobre", async(_req, res) => {
    res.render("paginas/NTM/sobre-ntm")
})

router.get("/NTM/equipe", async(__req, res) => {
    res.render("paginas/NTM/nossa-equipe")
})

router.get("/NTM/na-escola", async(_req, res) => {
    res.render("paginas/NTM/ntm-na-escola")
})

router.get("/institucional/sobre", async(_req, res) => {
    res.render("paginas/INSTITUCIONAL/sobre-secretaria")
})

router.get("/institucional/secretario", async(_req, res) => {
    res.render("paginas/INSTITUCIONAL/secretario")
})

router.get("/institucional/organograma", async(_req, res) => {
    res.render("paginas/INSTITUCIONAL/organograma")
})

export default router;