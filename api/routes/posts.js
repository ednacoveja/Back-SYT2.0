const { Router } = require("express");
const {
    getAllPost,
    creatPost,
    deletePost,
    detailPost,
    searchPost
} = require("../controllers/posts")


const router = Router()

router.get("/", getAllPost)
router.get("/", searchPost)
router.get("/:id", detailPost)
router.post("/", creatPost)
router.delete("/:id", deletePost)

module.exports= router