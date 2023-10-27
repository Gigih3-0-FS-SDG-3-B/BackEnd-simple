import {
  createServiceRates,
  getCurrentServiceRates,
} from "../../repositories/serviceRatesRepository.js";

export const createServiceRatesController = async (req, res) => {
  try {
    const serviceId = req.params.service_id;
    const { service_price } = req.body;
    const newRates = await createServiceRates(serviceId, service_price);
    res.json(newRates);
  } catch (error) {
    res.status(500).json({ error: `An error occurred ${error}` });
  }
};

export const getServiceRatesController = async (req, res) => {
  try {
    const { service_id } = req.params.service_id;
    const latestRate = await getCurrentServiceRates(service_id);
    res.json(latestRate);
  } catch (error) {
    res.status(500).json({ error: `An error occurred ${error}` });
  }
};
