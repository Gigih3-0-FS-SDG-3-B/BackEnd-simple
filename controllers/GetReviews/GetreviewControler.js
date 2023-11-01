import { getReviewsForOrder } from "../../repositories/Get-reviews.js"; 

export async function getReviewsForOrderController(req, res) {
  try {
    const { orderId } = req.params; 
    const reviews = await getReviewsForOrder(orderId);

    res.status(200).json({ reviews });
  } catch (error) {
    console.error("Error fetching reviews:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
