import { Request, Response } from 'express';
import { upload } from '../config/multer';
import { File } from '../models/file.model';
import { v4 as uuidv4 } from 'uuid';
import dotenv from 'dotenv';
dotenv.config();

const HandleFile = async (req: Request, res: Response): Promise<any> => {
  upload(req, res, async (err) => {
    if (err) {
      console.log(err);
      return res.status(500).json({ msg: 'error while uploading' });
    }

    if (!req.file) {
      return res.status(400).json({ msg: 'please upload a file ' });
    }

    //store in database
    const file = new File({
      fileName: req.file.filename,
      uuid: uuidv4(),
      path: req.file.path,
      size: req.file.size,
    });
    const response = await file.save();
    return res
      .status(200)
      .json({ file: `${process.env.APP_BASE_URL}/files/${response.uuid}` });
  });
};

const showFile = async (req: Request, res: Response): Promise<any> => {
  try {
    const file = await File.findOne({ uuid: req.params.uuid });
    if (!file) return res.render('download', { err: 'link expired' });
    return res.render('download', {
      uuid: file.uuid,
      fileName: file.fileName,
      fileSize: file.size,
      downloadLink: `${process.env.APP_BASE_URL}/files/download/${file.uuid}`,
    });
  } catch (error) {
    return res.render('download', { err: 'something wen wrong' });
  }
};

const downloadFile = async (req: Request, res: Response):Promise<any> => {
    const file = await File.findOne({ uuid: req.params.uuid });
   // Link expired
   if(!file) {
        return res.render('download', { error: 'Link has been expired.'});
   } 
   const response = await file.save();
   const filePath = `${file.path}`;
   res.download(filePath);
};

export { HandleFile, showFile, downloadFile };
