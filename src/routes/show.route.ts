import { Router } from 'express';
import { showFile } from '../controller/files.controller';
const showRouter = Router();

showRouter.get('/:uuid', showFile);

export { showRouter };
