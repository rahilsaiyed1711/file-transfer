import express from 'express';
import { connectdb } from './config/db';
import { router } from './routes/file.route';
import { showRouter } from './routes/show.route';
import path from 'path';
const PORT =  8080;
const app = express();

app.set("view engine","ejs");
app.set("views",path.join(__dirname,'/views'))
connectdb();
app.get("/",(req,res)=>{
    res.render("download")
})
app.use('/api', router);
app.use("/files",showRouter);
app.listen(PORT, () => {
  console.log('listening on port');
});
