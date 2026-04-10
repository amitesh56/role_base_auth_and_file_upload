const musicModel = require("../models/music.model")
const albumModel = require("../models/album.model")

const uploadFile = require("../services/storage.service")

async function musicUpload(req,res) {
   
    const user = req.user;
    const title = req.body.title;
    const file = req.file;

    const result = await uploadFile(file.buffer.toString("base64"))

    const music = await musicModel.create({
        uri : result.url,
        title ,
        artist : user.id
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

async function createAlbum(req,res){
    const {title, music} = req.body;
    const user = req.user;
    
    const album = await albumModel.create({
        title,
        music : music,
        artist : user.id
    })

    res.status(201).json({
        message:"Album is created success fully",
        album : {
            id : album.id,
            title : album.title,
            artist : album.artist,
            music : album.music
        }
    })
}

async function getAllMusic(req,res){
    const music = await musicModel
    .find()
    .limit(2) //also their is .skip(1)
    .populate("artist","username email")
    res.status(200).json({
        message : "all the music",
        music : music
    })
}

async function getAllAlbum(req,res) {
    const albums = await albumModel.find().select("title artist").populate("artist", "username email");

    res.status(200).json({
        message : "album fetched successfully",
        album : albums
    })
}

async function getAlbumsMusic(req,res){
    const albumId = req.params.albumId;
    const albumMusic = await albumModel.findById(albumId).populate("artist", "username email").populate("music")

    res.status(200).json({
        message : "this is all the music of the album",
        music : albumMusic
    })
}
module.exports = {musicUpload , createAlbum , getAllMusic , getAllAlbum , getAlbumsMusic}