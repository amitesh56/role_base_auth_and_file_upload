const musicModel = require("../models/music.model")
const jwt = require("jsonwebtoken")
const uploadFile = require("../services/storage.service")

async function musicUpload(req,res) {
    const token = req.cookies.token;
    if(!token){
        return res.status(401).json({
            message : "Unauthorise"
        })
    }

    const decode = jwt.verify(token,process.env.JWT_SECRET);
    try{
        if(decode.role!="artist"){
        return res.status(401).json({
            message : " you are not an artist"
        })
    }}catch(err){
        console.log("Unexpexted error" + err.message);
    }

    const title = req.body.title;
    const file = req.file;

    const result = await uploadFile(file.buffer.toString("base64"))

    const music = await musicModel.create({
        uri : result.url,
        title ,
        artist : decode.id
    })

    res.status(201).json({
        message : "music is created",
        music:{
            id:music._id,
            uri : music.uri,
            title : music.title,
            artist : music.artist
        }
    })
    

}
module.exports = {musicUpload}