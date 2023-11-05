// userController.js
import { withPrisma } from "../../middlewares/prismaMiddleware.js";
import { v4 as uuidv4 } from "uuid";
import jwt from 'jsonwebtoken'; // Use the ES module import for jwt
import bcrypt from 'bcrypt'; // Use the ES module import for bcrypt
import { authenticateUser } from '../../middlewares/authMiddleware.mjs'; // Assuming authMiddleware is an ES module

export const createUserController = async (req, res) => {
  try {
    const {
      birth_date,
      first_name,
      last_name,
      email,
      password,
      address,
      phone_number,
      profile_picture_url,
    } = req.body;
    const user_id = uuidv4();

    const newUser = await withPrisma(async (prisma) => {
      return prisma.users.create({
        data: {
          user_id: user_id,
          birth_date: new Date(birth_date).toISOString(),
          first_name: first_name,
          last_name: last_name,
          email: email,
          password: password,
          address: address,
          phone_number: phone_number,
          profile_picture_url: profile_picture_url,
        },
      });
    });

    // Generate JWT token with the role
    const token = jwt.sign({ role: 'user', user_id: user_id }, 'your_secret_key');

    res.json({ user: newUser, token });
  } catch (error) {
    res.status(500).json({ error: `An error occurred ${error}` });
  }
};

export const getSingleUserController = async (req, res) => {
  try {
    const user_id = req.params.user_id;

    const selectedUser = await withPrisma(async (prisma) => {
      return prisma.users.findUnique({
        where: {
          user_id: user_id,
        },
      });
    });

    res.json(selectedUser);
  } catch (error) {
    res.status(500).json({ error: `An error occurred ${error}` });
  }
};
export const updateUserProfileController = async (req, res) => {
  try {
    const userId = req.params.user_id; // Assuming the user_id is passed as a parameter
    const updatedUserData = req.body; // Assuming updated user data is sent in the request body

    // Perform validation and update user data as needed
    // Example: You can use Prisma to update the user data

    // For example, using Prisma
    const updatedUser = await withPrisma(async (prisma) => {
      return prisma.users.update({
        where: { user_id: userId },
        data: updatedUserData,
      });
    });

    res.json(updatedUser);
  } catch (error) {
    res.status(500).json({ error: `An error occurred ${error}` });
  }
};
