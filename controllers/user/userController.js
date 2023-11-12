import { withPrisma } from "../../middlewares/prismaMiddleware.js";
import { v4 as uuidv4 } from "uuid";
import { authenticateUser } from '../../middlewares/authMiddleware.mjs';
import jwt from 'jsonwebtoken';

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

    res.json(newUser);
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
    const userId = req.params.user_id;
    const updatedUserData = req.body;

    // Extract the token from the authorization header
    // const token = req.header('Authorization');

    // Verify the token
    // jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
    //   if (err) {
    //     return res.status(401).json({ message: 'Invalid token.' });
    //   }

    withPrisma(async (prisma) => {
      const updatedUser = await prisma.users.update({
        where: { user_id: userId },
        data: updatedUserData,
      });

      res.json(updatedUser);
    });
    // });
  } catch (error) {
    res.status(500).json({ error: `An error occurred ${error}` });
  }
};