"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mailRouter = void 0;
const express_1 = require("express");
const mail_controller_1 = require("../controller/mail.controller");
const mailRouter = (0, express_1.Router)();
exports.mailRouter = mailRouter;
mailRouter.post("/sendmail", mail_controller_1.sendMail);
