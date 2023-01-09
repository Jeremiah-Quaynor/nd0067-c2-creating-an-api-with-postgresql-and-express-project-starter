import jwt from "jsonwebtoken"
import { Request, Response, NextFunction } from "express"
import dotenv from 'dotenv'

dotenv.config();
const SECRET_KEY: any = process.env.SECRET_KEY;


const verifyAuthToken = (req: Request, res: Response, next:NextFunction) => {
    try {
        const authorizationHeader = req.headers.authorization
        const token:any = authorizationHeader?.split(' ')[1]
        jwt.verify(token, SECRET_KEY)
        next()
    } catch (error) {
        console.log(`Authentication error ${error}`)
        return
    }
}


export default verifyAuthToken;