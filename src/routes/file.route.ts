import { Router } from 'express';
import { HandleFile } from '../controller/files.controller';
const router = Router();

router.post('/files', HandleFile);

export { router };