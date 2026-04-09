const jwt = require("jsonwebtoken");

async function authArtist(req,res,next){
    const token = req.cookies.token;

    if(!token){
        return res.status(401).json({
            message : "Unauthorise user"
        })
    }

    try {
        const decode = jwt.verify(token,process.env.JWT_SECRET);
        if(decode.role!="artist"){
            return res.status(403).json({
                message : "you don't have access to this feature"
            })
        }
        req.user = decode
        next();
        
    } catch (error) {
        console.log("Somthing wrong" + error.message);
        return res.status(401).json({
            message : "Unauthorise artist"
        })
    }
}

module.exports = {authArtist} 