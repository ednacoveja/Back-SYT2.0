const { Router } = require("express");
const {
    getAllPost,
    creatPost,
    deletePost
} = require("../controllers/posts")


const router = Router()

router.get("/", getAllPost)
router.post("/", creatPost)
router.delete("/:id", deletePost)
module.exports= router