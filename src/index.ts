import express from 'express';
import { connectdb } from './config/db';
import { router } from './routes/file.route';
import { showRouter } from './routes/show.route';
import { downloadRoute } from './routes/download.route';
import {mailRouter} from "./routes/mail.route"
import path from 'path';
import cors from "cors"
import dotenv from "dotenv";
dotenv.config();
const PORT = process.env.PORT || 3000;
const app = express();
const corsOptions = {
  origin: process.env.ALLOWED_CLIENTS?.split(',')
}
app.use(cors(corsOptions))
app.use(express.json());
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../views'));
app.use(express.static('../public'));
connectdb();
app.use('/api', router);
app.use('/files', showRouter);
app.use('/files', mailRouter);
app.use('/files/download', downloadRoute);

app.listen(PORT, () => {
  console.log('listening on port');
});
 
