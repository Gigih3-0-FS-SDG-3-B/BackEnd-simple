import { createEvent } from "../../repositories/CreateEventRepository.js"; 

export async function createEventController(req, res) {
  try {
    const eventData = req.body; 
    const newEvent = await createEvent(eventData);

    res.status(201).json(newEvent);
  } catch (error) {
    console.error("Error creating event:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
