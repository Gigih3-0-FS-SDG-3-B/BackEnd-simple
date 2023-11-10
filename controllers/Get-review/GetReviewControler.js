import { getReviewsForOrder } from "../../repositories/GetReviewRepository.js"; 

export async function getReviewsForOrderController(req, res) {
  try {
    const { orderId } = req.params; // Anda dapat menentukan ID pesanan melalui parameter URL atau sesuai kebutuhan Anda.
    const reviews = await getReviewsForOrder(orderId);

    res.status(200).json({ reviews });
  } catch (error) {
    console.error("Error fetching reviews:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
