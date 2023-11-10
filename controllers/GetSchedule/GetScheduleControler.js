import { getScheduleForOrder } from "../../repositories/GetScheduleRepository.js"; 

export async function getScheduleForOrderController(req, res) {
  try {
    const { orderId } = req.params; // Anda dapat menentukan ID pesanan melalui parameter URL atau sesuai kebutuhan Anda.
    const schedule = await getScheduleForOrder(orderId);

    res.status(200).json({ schedule });
  } catch (error) {
    console.error("Error fetching schedule:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
