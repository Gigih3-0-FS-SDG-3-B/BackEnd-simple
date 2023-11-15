import { withPrisma } from "../middlewares/prismaMiddleware.js";
import * as eventRepository from "./eventRepository.js";
import * as orderRepository from "./orderRepository.js";
import { explodeDates } from "../common/dateHelper.js"
import { eachDayOfInterval, format } from 'date-fns';

export async function getAvailableSchedule(caregiverId) {
  return withPrisma(async (prisma) => {
    const orders = await orderRepository.getOrdersByCaregiverId(caregiverId);
    const events = await eventRepository.getEvents(caregiverId);
    const orderAccrualDates = explodeDates(orders, 'date_start', 'date_end').map(
        (order) => order.date
    )
    const eventsAccrualDates = explodeDates(events, 'start_date', 'end_date').map(
        (event) => event.date
    )
    const unavailableDates = orderAccrualDates.concat(eventsAccrualDates).sort();

    let startDate = new Date();
    let endDate = new Date();
    endDate.setFullYear(endDate.getFullYear() + 1);
    let allDates = eachDayOfInterval({ start: startDate, end: endDate });
    allDates = allDates.map(date => format(date, 'yyyy-MM-dd'));
    const availableDates = allDates.filter(date => ! unavailableDates.includes(date));

    return { availableDates, unavailableDates };
  });
}