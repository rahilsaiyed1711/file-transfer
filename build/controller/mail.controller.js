"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendMail = void 0;
const email_services_1 = require("../services/email.services");
const emailTemplate_1 = require("../services/emailTemplate");
const file_model_1 = require("../models/file.model");
const sendMail = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(req.body);
    const { uuid, emailTo, emailFrom } = req.body;
    // Validation of request must be done first
    if (!uuid || !emailFrom || !emailTo) {
        return res.status(422).json({ error: 'all fields are required' });
    }
    const file = yield file_model_1.File.findOne({ uuid: uuid });
    if (file.sender) {
        return res.status(422).json({ error: 'email sent already' });
    }
    file.sender = emailFrom;
    file.receiver = emailTo;
    const response = yield file.save();
    yield (0, email_services_1.mailer)(emailFrom, emailTo, `you have received a file`, `${emailFrom} shared a file with you`, (0, emailTemplate_1.htmlTemplate)({
        emailFrom: emailFrom,
        downloadLink: `${process.env.APP_BASE_URL}/files/${file.uuid}?source=email`,
        size: `${(file.size / 1000).toFixed(0)} KB`,
        expires: '24 hours',
    }));
    return res.send({ success: "sent mail" });
});
exports.sendMail = sendMail;
