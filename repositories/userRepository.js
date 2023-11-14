import { withPrisma } from "../middlewares/prismaMiddleware.js";

export async function getUserByEmail(email) {
  const user = await withPrisma(async (prisma) => {
    return prisma.users.findFirst({
      where: {
        email: email,
      },
    });
  });
  return user;
}


export async function updateUser(updatedUserData) {
  const { first_name, last_name, address, phone_number } = updatedUserData;
  const updatedUser = withPrisma(async (prisma) => {
    return (updatedUser = await prisma.users.update({
      where: { user_id: userId },
      data: {
        first_name: first_name,
        last_name: last_name,
        address: address,
        phone_number: phone_number,
      },
    }));
  });
  return updatedUser;
}
