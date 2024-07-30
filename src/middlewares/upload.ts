import multer from 'multer';
import path from 'path';

// Define storage configuration
const storage = multer.diskStorage({
  destination: (req: any, file: any, cb: any) => {
    // Set the destination directory for uploaded files
    cb(null, path.join(__dirname, '../../uploads'));
  },
  filename: (req: any, file: any, cb: any) => {
    // Set the file name format
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

// Create the multer instance with the storage configuration
export const upload = multer({ storage: storage });
