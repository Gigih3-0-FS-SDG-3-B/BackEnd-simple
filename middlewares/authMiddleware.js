import jwt from 'jsonwebtoken';

export const authenticateUser = (req, res, next) => {
  let token = req.header('Authorization');
  if (!token) {
    return res.status(401).json({ message: 'Access denied. No token provided.' });
  }
  
  try {
    token = token ? token.replace(/^Bearer\s/, '') : undefined;
    const secretKey = process.env.SECRET_KEY;
    const decoded = jwt.verify(token, secretKey);
    req.user = decoded;
    next();
  } catch (error) {
    console.log(error)
    return res.status(401).json({ message: 'Invalid token.', error: error });
  }
};

export const checkAdmin = (req, res, next) => {
  if (req.user && req.user.role === 'admin') {
    next();
  } else {
    return res.status(403).json({ message: 'Access denied. Admin role required.' });
  }
};