import { withPrisma } from "../middlewares/prismaMiddleware.js";

export async function cancelEvent(eventId) {
  return withPrisma(async (prisma) => {
    const event = await prisma.events.findUnique({
      where: {
        id: eventId,
      },
    });

    if (!event) {
      throw new Error("Event not found");
    }

    const canceledEvent = await prisma.events.update({
      where: {
        id: eventId,
      },
      data: {
        status: "canceled",
      },
    });

    return canceledEvent;
  });
}
