"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.showRouter = void 0;
const express_1 = require("express");
const files_controller_1 = require("../controller/files.controller");
const showRouter = (0, express_1.Router)();
exports.showRouter = showRouter;
showRouter.get('/:uuid', files_controller_1.show);
