import { createEvent,cancelEvent } from "../../repositories/CreateEventRepository.js"; 

export async function createEventController(req, res) {
  try {
    const eventData = req.body; 
    console.log(eventData)
    const newEvent = await createEvent(eventData);

    res.status(201).json(newEvent);
  } catch (error) {
    console.error("Error creating event:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
export async function cancelEventController(req, res) {
  try {
    const {event_id} = req.params; 
    console.log(event_id)
    const newEvent = await cancelEvent(event_id);

    res.status(201).json(newEvent);
  } catch (error) {
    console.error("Error creating event:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}