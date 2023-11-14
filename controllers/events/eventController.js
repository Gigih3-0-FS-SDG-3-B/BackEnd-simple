import * as eventRepository from "../../repositories/eventRepository.js";

export async function createEventController(req, res) {
  try {
    const eventData = req.body;
    const newEvent = await eventRepository.createEvent(eventData);

    res.status(201).json(newEvent);
  } catch (error) {
    console.error("Error creating event:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

export async function cancelEventController(req, res) {
  try {
    const eventId = req.params.eventId;
    const canceledEvent = await eventRepository.cancelEvent(eventId);

    if (canceledEvent) {
      res.status(200).json(canceledEvent);
    } else {
      res.status(404).json({ error: "Event not found" });
    }
  } catch (error) {
    console.error("Error canceling event:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
