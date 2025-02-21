"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const db_1 = require("./config/db");
const file_route_1 = require("./routes/file.route");
const show_route_1 = require("./routes/show.route");
const download_route_1 = require("./routes/download.route");
const mail_route_1 = require("./routes/mail.route");
const path_1 = __importDefault(require("path"));
const PORT = process.env.PORT || 3000;
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.set('view engine', 'ejs');
app.set('views', path_1.default.join(__dirname, '../views'));
app.use(express_1.default.static('../public'));
(0, db_1.connectdb)();
app.use('/api', file_route_1.router);
app.use('/files', show_route_1.showRouter);
app.use('/files', mail_route_1.mailRouter);
app.use('/files/download', download_route_1.downloadRoute);
app.listen(PORT, () => {
    console.log('listening on port');
});
