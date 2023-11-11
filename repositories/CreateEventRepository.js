import { withPrisma } from "../middlewares/prismaMiddleware.js";

export async function createEvent(eventData) {
  return withPrisma(async (prisma) => {

    const { caregiver_id, start_date, end_date } = eventData;

    const newEvent = await prisma.events.create({
      data: {
        caregiver_id,
        start_date,
        end_date,
      },
    });

    return newEvent;
  });
}
export async function cancelEvent(eventData) {
  return withPrisma(async (prisma) => {


    const newEvent = await prisma.events.update({
      where:{
        id:Number(eventData)
      },
      data: {
        deleted_at: new Date().toISOString()
      },
    });

    return newEvent;
  });
}
