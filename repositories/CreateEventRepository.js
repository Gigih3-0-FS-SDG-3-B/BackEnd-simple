import { withPrisma } from "../middlewares/prismaMiddleware.js";

export async function createEvent(eventData) {
  return withPrisma(async (prisma) => {

    const { title, date, location, description } = eventData;

    const newEvent = await prisma.events.create({
      data: {
        title,
        date: new Date(date).toISOString(),
        location,
        description,
      },
    });

    return newEvent;
  });
}
