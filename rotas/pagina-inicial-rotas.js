import express from "express"
const router = express.Router();

router.get("/", async(req, res) => {
    res.render("paginas/pagina-inicial")
})

router.get("/NTM/sobre", async(req, res) => {
    res.render("paginas/NTM/sobre-ntm")
})

<<<<<<< HEAD
router.get("/NTM/equipe", async(_req, res) => {
    res.render("paginas/ntm/nossa-equipe")
=======
router.get("/NTM/na-escola", async(req, res) => {
    res.render("paginas/NTM/ntm-na-escola")
>>>>>>> 9ae270e64f04d485b27fc66a1dff1a3a90234b86
})

export default router;