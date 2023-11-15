import { withPrisma } from "../middlewares/prismaMiddleware.js";

export async function getEvents(caregiverId) {
  return withPrisma(async (prisma) => {

    const events = await prisma.events.findMany({
      where: {
        caregiver_id: caregiverId,
      },
    });
    return events;
  });
}


export async function createEvent(eventData) {
  return withPrisma(async (prisma) => {
    const { caregiver_id, start_date, end_date } = eventData;

    const newEvent = await prisma.events.create({
      data: {
        caregiver_id: caregiver_id,
        start_date: new Date(start_date).toISOString(),
        end_date: new Date(end_date).toISOString(),
      },
    });

    return newEvent;
  });
}

export async function cancelEvent(eventId) {
  return withPrisma(async (prisma) => {
    const newEvent = await prisma.events.update({
      where: {
        id: Number(eventId),
      },
      data: {
        deleted_at: new Date().toISOString(),
      },
    });

    return newEvent;
  });
}
