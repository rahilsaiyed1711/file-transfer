import { Router } from 'express';
import { show } from '../controller/files.controller';
const showRouter = Router();

showRouter.get('/:uuid', show);

export { showRouter };
