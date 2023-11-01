const uploadProfilePicture = require('../../repositories/Imagerepository.js');


const uploadProfilePictureController = (req, res) => {
  res.status(200).json({ message: 'Profile picture uploaded successfully' });
};

module.exports = { uploadProfilePictureController, uploadProfilePicture };
