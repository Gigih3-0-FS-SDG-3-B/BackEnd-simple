import { eachDayOfInterval, format } from "date-fns";

export function explodeDates(inputArray, startDateKey, endDateKey) {
  const resultArray = [];

  inputArray.forEach((item) => {
    const startDate = new Date(item[startDateKey]);
    const endDate = new Date(item[endDateKey]);

    const datesArray = eachDayOfInterval({ start: startDate, end: endDate });

    const explodedObjects = datesArray.map((date) => ({
      ...item,
      date: format(date, "yyyy-MM-dd"),
    }));

    resultArray.push(...explodedObjects);
  });

  return resultArray;
}

function areDatesOverlapping(start1, end1, start2, end2) {
  return new Date(start1) <= new Date(end2) && new Date(end1) >= new Date(start2);
}

export function searchAvailableCaregiversHelper(
  caregivers,
  startDate,
  endDate
) {
  return caregivers.filter((caregiver) => {
    const conflictingEvents = caregiver.events.some((event) => {
      const eventStartDate = new Date(event.start_date);
      const eventEndDate = new Date(event.end_date);
      return areDatesOverlapping(eventStartDate, eventEndDate, startDate, endDate);
    });

    const conflictingOrders = caregiver.orders.some((order) => {
      const orderStartDate = new Date(order.date_start);
      const orderEndDate = new Date(order.date_end);
      return areDatesOverlapping(orderStartDate, orderEndDate, startDate, endDate);
    });

    // The caregiver is available if there are no conflicting events or orders
    return !conflictingEvents && !conflictingOrders;
  });
}
