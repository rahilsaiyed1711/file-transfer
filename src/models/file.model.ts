import { Schema, model } from 'mongoose';
import { IFile, IMail } from '../interfaces/user.interface';


const fileSchema = new Schema<IFile>(
  {
    fileName: {
      type: String,
      required: true,
    },
    path: {
      type: String,
      required: true,
    },
    size: {
      type: Number,
      required: true,
    },
    uuid: {
      type: String,
      required: true,
    },
    sender: {
      type: String,
      required: false,
    },
    receiver: {
      type: String,
      required: false,
    },
  },
  { timestamps: true }
);

const File = model<IFile>('file', fileSchema);

export { File };
