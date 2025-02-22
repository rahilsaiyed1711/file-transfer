import { Router } from 'express';
import { downloadFile } from '../controller/files.controller';
const downloadRoute = Router();

downloadRoute.get('/:uuid', downloadFile);

export { downloadRoute };
