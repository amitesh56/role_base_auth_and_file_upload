const express = require("express")
const cookies = require("cookie-parser")
const authRoute = require("./routes/auth.routes")
const musicRoute = require("./routes/music.routes")

const app = express()
app.use(express.json());
app.use(cookies());


app.use("/api/auth", authRoute)
app.use("/api/upload", musicRoute);

module.exports = app;