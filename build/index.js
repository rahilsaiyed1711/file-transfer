"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const db_1 = require("./config/db");
const file_route_1 = require("./routes/file.route");
const show_route_1 = require("./routes/show.route");
const path_1 = __importDefault(require("path"));
const PORT = 8080;
const app = (0, express_1.default)();
app.set("view engine", "ejs");
app.set("views", path_1.default.join(__dirname, '/views'));
(0, db_1.connectdb)();
app.get("/", (req, res) => {
    res.render("download");
});
app.use('/api', file_route_1.router);
app.use("/files", show_route_1.showRouter);
app.listen(PORT, () => {
    console.log('listening on port');
});
