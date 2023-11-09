import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { withPrisma } from '../../middlewares/prismaMiddleware.js';

const secretKey = process.env.SECRET_KEY;

// Function to generate a JWT token
const generateToken = (user) => {
  const token = jwt.sign({ user_id: user.user_id, role: user.role }, secretKey, {
    expiresIn: '1h', 
  });
  return token;
};

// Function to compare passwords
const comparePasswords = (plainPassword, hashedPassword) => {
  return bcrypt.compare(plainPassword, hashedPassword);
};

export const loginUserController = async (req, res) => {
  try {
    const { email, password } = req.body; // Assuming email and password are sent in the request body

    // Retrieve the user's hashed password from the database based on the provided email
    const user = await withPrisma(async (prisma) => {
      return prisma.users.findFirst({
        where: {
          email: email,
        },
      });
    });

    if (!user) {
      return res.status(401).json({ error: 'User not found' });
    }

    // Compare the provided password with the stored hashed password
    const passwordMatch = comparePasswords(password, user.password);

    if (passwordMatch) {
      // Password is correct, generate a token and send a successful response
      const token = generateToken(user);
      res.json({ user, token });
    } else {
      // Password is incorrect, send an error response
      res.status(401).json({ error: 'Incorrect password' });
    }
  } catch (error) {
    res.status(500).json({ error: `An error occurred ${error}` });
  }
};
