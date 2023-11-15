import { withPrisma } from "../../middlewares/prismaMiddleware.js";
import { v4 as uuidv4 } from "uuid";
import { hashPassword } from "../../common/authentication.js";
import {
  generateToken,
  comparePasswords,
} from "../../common/authentication.js";
import * as userRepository from "../../repositories/userRepository.js";

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
      const hashedPassword = await hashPassword(password);
      return prisma.users.create({
        data: {
          user_id: user_id,
          birth_date: new Date(birth_date).toISOString(),
          first_name: first_name,
          last_name: last_name,
          email: email,
          password: hashedPassword,
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
    const updatedUser = await userRepository.updateUser(
      userId,
      updatedUserData
    );
    res.json(updatedUser);
  } catch (error) {
    res.status(500).json({ error: `An error occurred ${error}` });
  }
};

export const loginUserController = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await userRepository.getUserByEmail(email);

    if (!user) {
      return res.status(401).json({ error: "User not found" });
    }

    const passwordMatch = await comparePasswords(password, user.password);

    if (passwordMatch) {
      const token = generateToken(user);
      res.status(200).json({ user, token });
    } else {
      res.status(401).json({ error: "Incorrect password" });
    }
  } catch (error) {
    res.status(500).json({ error: `An error occurred ${error}` });
  }
};
