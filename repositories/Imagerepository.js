const multer = require('multer');

// Konfigurasi penyimpanan untuk gambar profil
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/profile_pictures/'); // Tentukan direktori penyimpanan gambar profil
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, uniqueSuffix + '-' + file.originalname);
  },
});

const upload = multer({ storage: storage });

// Fungsi untuk menangani pengunggahan gambar profil
const uploadProfilePicture = (req, res, next) => {
  upload.single('profilePicture')(req, res, (err) => {
    if (err) {
      console.error('Error uploading profile picture:', err);
      return res.status(500).json({ error: 'Error uploading profile picture' });
    }
    next();
  });
};

module.exports = uploadProfilePicture;
