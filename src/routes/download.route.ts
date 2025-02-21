import { Router } from 'express';
import { downloadFile } from '../controller/files.controller';
const downloadRoute = Router();

downloadRoute.get('/', downloadFile);

export { downloadRoute };
