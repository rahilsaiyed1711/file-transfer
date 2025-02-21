import {Router} from "express";
import {sendMail} from "../controller/mail.controller";

const mailRouter = Router();

mailRouter.post("/sendmail",sendMail)

export { mailRouter };