const jwt = require('jsonwebtoken');
require("dotenv").config();
const verifyUser = (req,res,next)=>{
    const token = req.headers.authorization;
    if(token){
        jwt.verify(token,process.env.ACCESS_TOKEN, (err,user)=>{
            if(err) res.status(403).json({message:"Invalid token"})
            req.user = user;
            next()
        })
    }
     else {
        res.status(401).json({message:"Unauthorized request"})
    }
}
module.exports = verifyUser;