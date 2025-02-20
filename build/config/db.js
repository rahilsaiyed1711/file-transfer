"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectdb = void 0;
const mongoose_1 = require("mongoose");
const connectdb = () => {
    (0, mongoose_1.connect)('mongodb://127.0.0.1:27017/fileSharing')
        .then(() => console.log('mongo connected'))
        .catch((err) => console.log(err));
};
exports.connectdb = connectdb;
