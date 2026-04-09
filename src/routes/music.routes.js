const express = require("express")
const multer = require("multer")
const router = express.Router();
const musicUpload = require("../controllers/music.controller")
const authMiddleware = require("../middleware/auth.middleware")

const upload = new multer({storage : multer.memoryStorage()})

router.post("/music",authMiddleware.authArtist, upload.single("music"),musicUpload.musicUpload)

router.post("/album",authMiddleware.authArtist, musicUpload.createAlbum)
module.exports = router;