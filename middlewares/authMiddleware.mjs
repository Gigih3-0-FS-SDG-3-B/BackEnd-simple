
import jwt from 'jsonwebtoken';


// Middleware to verify JWT token
const authenticateUser = (req, res, next) => {
  const token = req.header('Authorization');
  if (!token) {
    return res.status(401).json({ message: 'Access denied. No token provided.' });
  }

  try {
    const secretKey = process.env.SECRET_KEY;
    const decoded = jwt.verify(token, secretKey);
    req.user = decoded;
    next();
  } catch (error) {
    console.log(error)
    return res.status(401).json({ message: 'Invalid token.', error: error });
  }
};

// Middleware to check admin role
const checkAdmin = (req, res, next) => {
  if (req.user && req.user.role === 'admin') {
    next();
  } else {
    return res.status(403).json({ message: 'Access denied. Admin role required.' });
  }
};

export { authenticateUser, checkAdmin };
