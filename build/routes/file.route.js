"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const files_controller_1 = require("../controller/files.controller");
const router = (0, express_1.Router)();
exports.router = router;
router.post('/files', files_controller_1.HandleFile);
