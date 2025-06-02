const { token } = require("morgan");
import jwt from 'jsonwebtoken';
import {JWT_SECRET} from '../config/env.js';
const authorize = async (req, res, next)=>{
    try{
        
        if(req.headers.authorization && req.headers.authorization.startWith('Bearer')){
            token= req.headers.authorization.split(' ')[1];

        }

        if(!token) return res.status(401).json({message:'Unauthorized'});
        const decoded = jwt.verify(token, JWT_SECRET)
        const user = await User.findById(decoded.userId);

        if(!user){
            res.status(404).json({message: 'Unauthorized'});
        }

        req.user = user;
        next();
    }catch(error){
        res.status(401).json({message: "Unauthorized", error: error.message});
    }
}

export default authorize;