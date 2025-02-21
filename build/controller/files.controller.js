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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.downloadFile = exports.showFile = exports.HandleFile = void 0;
const multer_1 = require("../config/multer");
const file_model_1 = require("../models/file.model");
const uuid_1 = require("uuid");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const HandleFile = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    (0, multer_1.upload)(req, res, (err) => __awaiter(void 0, void 0, void 0, function* () {
        if (err) {
            console.log(err);
            return res.status(500).json({ msg: 'error while uploading' });
        }
        if (!req.file) {
            return res.status(400).json({ msg: 'please upload a file ' });
        }
        //store in database
        const file = new file_model_1.File({
            fileName: req.file.filename,
            uuid: (0, uuid_1.v4)(),
            path: req.file.path,
            size: req.file.size,
        });
        const response = yield file.save();
        return res
            .status(200)
            .json({ file: `${process.env.APP_BASE_URL}/files/${response.uuid}` });
    }));
});
exports.HandleFile = HandleFile;
const showFile = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const file = yield file_model_1.File.findOne({ uuid: req.params.uuid });
        if (!file)
            return res.render('download', { err: 'link expired' });
        return res.render('download', {
            uuid: file.uuid,
            fileName: file.fileName,
            fileSize: file.size,
            downloadLink: `${process.env.APP_BASE_URL}/files/download/${file.uuid}`,
        });
    }
    catch (error) {
        return res.render('download', { err: 'something wen wrong' });
    }
});
exports.showFile = showFile;
const downloadFile = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const file = yield file_model_1.File.findOne({ uuid: req.params.uuid });
    // Link expired
    if (!file) {
        return res.render('download', { error: 'Link has been expired.' });
    }
    const response = yield file.save();
    const filePath = `${file.path}`;
    res.download(filePath);
});
exports.downloadFile = downloadFile;
