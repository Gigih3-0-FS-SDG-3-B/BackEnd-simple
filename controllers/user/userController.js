import { withPrisma } from "../../middlewares/prismaMiddleware.js";
import { v4 as uuidv4 } from "uuid";

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
    console.log(user_id);
    const isoBirthDate = new Date(birth_date).toISOString();

    const newUser = await withPrisma(async (prisma) => {
      return prisma.users.create({
        data: {
          user_id: user_id,
          birth_date: isoBirthDate,
          first_name: first_name,
          last_name: last_name,
          email: email,
          password: password,
          address: address,
          phone_number: phone_number,
          profile_picture_url: profile_picture_url
        },
      });
    });

    res.json(newUser);
  } catch (error) {
    res.status(500).json({ error: `An error occurred ${error}` });
  }
};
