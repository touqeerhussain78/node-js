import multer from 'multer';
import path from 'path';

// Define storage configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    // Set the destination directory for uploaded files
    cb(null, path.join(__dirname, '../../public/uploads'));
  },
  filename: (req, file, cb) => {
    // Set the file name format
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

// Create the multer instance with the storage configuration
export const upload = multer({ storage: storage });

// Middleware for handling multiple images
export const uploadMultiple = upload.array('files', 10); // 'images' is the field name, and 10 is the max count
