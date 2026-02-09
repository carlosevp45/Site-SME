import express from "express"
const router = express.Router();

router.get("/", async(req, res) => {
    res.render("paginas/pagina-inicial")
})

export default router;