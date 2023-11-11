import { cancelEvent } from "../../repositories/EventCancelrepository.js"; 

export async function cancelEventController(req, res) {
  try {
    const eventId = req.params.eventId; 
    const canceledEvent = await cancelEvent(eventId);

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
