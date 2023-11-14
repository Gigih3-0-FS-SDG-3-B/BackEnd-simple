import { withPrisma } from "../../middlewares/prismaMiddleware.js";
import { v4 as uuidv4 } from "uuid";

export const createCaregiverController = async (req, res) => {
  try {
    const {
      first_name,
      last_name,
      birth_date,
      email,
      password,
      address,
      phone_number,
      year_experience,
      profile_picture_url,
      education_id,
    } = req.body;
    const user_id = uuidv4();
    const caregiver_id = uuidv4();

    const newCaregiver = await withPrisma(async (prisma) => {
      return prisma.caregivers.create({
        data: {
          caregiver_id: caregiver_id,
          year_experience: year_experience,
          education_id: education_id,
        },
      });
    });

    const newUser = await withPrisma(async (prisma) => {
      return prisma.users.create({
        data: {
          user_id: user_id,
          caregiver_id: caregiver_id,
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

export const getSingleCaregiverDetailController = async (req, res) => {
  try {
    const caregiver_id = req.params.caregiver_id;
    const selectedCaregiver = await withPrisma(async (prisma) => {
      return prisma.caregivers.findUnique({
        where: {
          caregiver_id: caregiver_id,
        },
        include: {
          users: true,
        },
      });
    });
    const flattenedCaregiverJSON = {
      ...selectedCaregiver,
      ...selectedCaregiver.users,
    };
    delete flattenedCaregiverJSON.users;

    res.json(flattenedCaregiverJSON);
  } catch (error) {
    res.status(500).json({ error: `An error occurred ${error}` });
  }
};

// Function to filter caregivers by date range
export const filterCaregiversByDateController = async (req, res) => {
  try {
    const { startDate, endDate } = req.query; // Assuming startDate and endDate are query parameters

    // Use Prisma to query caregivers whose availability falls within the selected date range
    const caregivers = await withPrisma(async (prisma) => {
      return prisma.caregivers.findMany({
        where: {
          availableDates: {
            some: {
              date: {
                gte: new Date(startDate), // Date should be greater than or equal to startDate
                lte: new Date(endDate),   // Date should be less than or equal to endDate
              },
            },
          },
        },
      });
    });

    res.json(caregivers);
  } catch (error) {
    res.status(500).json({ error: `An error occurred ${error}` });
  }
};