"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.File = void 0;
const mongoose_1 = require("mongoose");
const fileSchema = new mongoose_1.Schema({
    fileName: {
        type: String,
        required: true,
    },
    path: {
        type: String,
        required: true,
    },
    size: {
        type: Number,
        required: true,
    },
    uuid: {
        type: String,
        required: true,
    },
    sender: {
        type: String,
        required: false,
    },
    receiver: {
        type: String,
        required: false,
    },
}, { timestamps: true });
const File = (0, mongoose_1.model)('file', fileSchema);
exports.File = File;
