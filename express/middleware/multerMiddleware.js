const multer = require("multer");
const path = require("path");
const fs = require("fs");

// Define upload directory for avatars
const avatarUploadDir = path.join(__dirname, "../uploads/avatars");

// Create upload directory if it doesn't exist
const createDirIfNotExists = (dir) => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
};

createDirIfNotExists(avatarUploadDir);

// Configure storage for multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    if (file.fieldname === "avatar") {
      cb(null, avatarUploadDir);
    } else {
      cb(new Error("Invalid field name"));
    }
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + path.extname(file.originalname));
  },
});

// File filter function for avatar uploads
const fileFilter = (req, file, cb) => {
  const allowedTypes = /jpeg|jpg|png/;
  const mimetype = allowedTypes.test(file.mimetype);
  const extname = allowedTypes.test(
    path.extname(file.originalname).toLowerCase()
  );

  if (mimetype && extname) {
    cb(null, true);
  } else {
    cb(new Error("Invalid file type for avatar!"));
  }
};

// Initialize multer with storage and file filter configuration
const upload = multer({
  storage,
  fileFilter,
  limits: { fileSize: 5 * 1024 * 1024 }, // Set limit to 5MB for each avatar
});

module.exports = upload;
