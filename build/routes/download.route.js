"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.downloadRoute = void 0;
const express_1 = require("express");
const files_controller_1 = require("../controller/files.controller");
const downloadRoute = (0, express_1.Router)();
exports.downloadRoute = downloadRoute;
downloadRoute.get('/', files_controller_1.downloadFile);
