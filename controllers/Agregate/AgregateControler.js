import { calculateAggregateRating } from "../../repositories/AgregateRepository.js"; 

export async function getAggregateRating(req, res) {
  try {
    const { orderId } = req.params; // Anda dapat menentukan ID pesanan melalui parameter URL atau sesuai kebutuhan Anda.
    const aggregateRating = await calculateAggregateRating(orderId);

    if (aggregateRating === null) {
      res.status(404).json({ error: "Order not found" });
    } else {
      res.status(200).json({ aggregateRating });
    }
  } catch (error) {
    console.error("Error calculating aggregate rating:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

export async function getAggregateRatingController(req, res) {
  try {
    const { orderId } = req.params; // Anda dapat menentukan ID pesanan melalui parameter URL atau sesuai kebutuhan Anda.
    const aggregateRating = await calculateAggregateRating(orderId);

    if (aggregateRating === null) {
      res.status(404).json({ error: "Order not found" });
    } else {
      res.status(200).json({ aggregateRating });
    }
  } catch (error) {
    console.error("Error calculating aggregate rating:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}