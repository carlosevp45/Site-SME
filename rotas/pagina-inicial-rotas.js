import express from "express"
const router = express.Router();

router.get("/", async(req, res) => {
    res.render("paginas/pagina-inicial")
})

router.get("/NTM/sobre", async(req, res) => {
    res.render("paginas/NTM/sobre-ntm")
})

export default router;