import multer from 'multer';
import path from 'path';
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, './src/uploads/'),
  filename: (req, file, cb) => {
    const suffix = `${Date.now()}-${Math.random() * 1e9}${path.extname(
      file.originalname
    )}`;
    cb(null, suffix);
  },
});

const upload = multer({
  storage: storage,
  limits: { fileSize: 100000 * 5 },
}).single('myfile');

export { upload };
