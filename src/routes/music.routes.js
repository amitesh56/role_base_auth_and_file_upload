const express = require("express")
const multer = require("multer")
const router = express.Router();
const musicController = require("../controllers/music.controller")
const authMiddleware = require("../middleware/auth.middleware")

const upload = new multer({storage : multer.memoryStorage()})

router.post("/music",authMiddleware.authArtist, upload.single("music"),musicController.musicUpload)

router.post("/album",authMiddleware.authArtist, musicController.createAlbum)

router.get("/",authMiddleware.authUser,musicController.getAllMusic )

router.get("/album", authMiddleware.authUser, musicController.getAllAlbum)

router.get("/album/:albumId", authMiddleware.authUser, musicController.getAlbumsMusic)

module.exports = router;