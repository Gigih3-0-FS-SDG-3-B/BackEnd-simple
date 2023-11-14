import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

export const hashPassword = async (plainPassword) => {
  try {
    const saltRounds = 1;
    const hashedPassword = await bcrypt.hash(plainPassword, saltRounds);
    return hashedPassword;
  } catch (error) {
    throw error;
  }
};

export const generateToken = (user) => {
  const secretKey = process.env.SECRET_KEY;
  const token = jwt.sign(
    { user_id: user.user_id, role: user.role },
    secretKey,
    {
      expiresIn: "7d",
    }
  );
  return token;
};

export const comparePasswords = (plainPassword, hashedPassword) => {
  return bcrypt.compare(plainPassword, hashedPassword);
};
