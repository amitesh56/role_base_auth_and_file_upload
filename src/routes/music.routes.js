const express = require("express")
const multer = require("multer")
const router = express.Router();
const musicUpload = require("../controllers/music.controller")

const upload = new multer({storage : multer.memoryStorage()})

router.post("/music", upload.single("music"),musicUpload.musicUpload)


module.exports = router;