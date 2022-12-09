const { Post, User } = require("../db");



const getAllPost = async(req,res)=>{
    try {
        const post= await Post.findAll()
        if(!post){
            console.log("No hay Post")
            res.status(400).json({
                msg:"No hay Post"
            })
        }
        console.log("Enviados")
        res.status(200).json(post)
    } catch (error) {
        res.status(500).json({
            msg:"Error en el servidor",
            err: error
        })
    }
}

const searchPost =async(req,res)=>{
    try {
        const title = req.query.title
        if(!title) res.status(400).json({msg:"No se encontro el Post"})
        let titleFind = await Post.findAll({
            where:{
                title:{[Op.iLike]:`${title}`}
            }
        })
        res.status(200).json({
            post:titleFind,
            msg:"Post encontrado"
        })
    } catch (error) {
        res.status(500).json({
            msg:"Error en el servidor",
            err: error
        })
    }
}


const detailPost = async(req,res)=>{
    try {
        const idPost = req.params.id;
        if(!idPost) res.status(400).json({msg:"No se encontro el post"})
        const searchPostId = await Post.findByPk(id)
        res.status(200).json({
            post:searchPostId,
            msg:"Se encontro"
        })
    } catch (error) {
        res.status(500).json({
            msg:"Error en el servidor",
            err: error
        })
    }
}

const creatPost = async(req,res)=>{
    try{
        // datos necesarios para la creacion del posteo
        const {title, text, categories, premium} = req.body


        // datos del posteo 
        const fields={}
        if (title) fields.title = title;
        if (text) fields.text = text;
        if (premium) fields.premium = premium;
        if(categories) fields.categories = categories;

        const newPost = await Post.create(fields);
        if (!newPost) throw new Error("No se pudo crear el post");
        res.status(200).json({
            msg:"Post Creat",
            post:newPost
        })
        
    }catch(error){
        res.status(500).json({
            msg:"Error en el servidor",
            err: error.message,
        })
    }
}


const deletePost= async(req,res)=>{

    try {
        let {id}=  req.params;
        let searchPost = await Post.findByPk(id)
        if(!searchPost)res.status(500).json({msg:"No se encontro el Posts"});

        await searchPost.destroy();
        
        res.status(200).json({msg:"Se elimino el posteo", post:searchPost})
        
    } catch (error) {
        res.status(500).json({
            msg:"Error en el servidor",
            err: error.message,
        }) 
    }
}

module.exports={
    getAllPost,
    creatPost,
    searchPost,
    deletePost,
    detailPost
}