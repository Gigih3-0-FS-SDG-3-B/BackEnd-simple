import { updateOrder, getTodayPaymentSuccessVisits, getOngoingOrdersWithYesterdayEnd } from "../repositories/orderRepository.js";
import { ORDER_STATUS } from "../enums/orderStatusEnum.js";

export const updateOrderJob = async () => {
    // status: pending(0) -> waitting for payment(300) (caregiver accept order) -> payment success(400) (caregiver ready for visit) -> on going(500) -> completed(600)
    // pending -> cancel(100) (user cancel order)
    // pending -> reject(200) (caregiver reject order)

    try {
        const todayVisitOrder = await getTodayPaymentSuccessVisits();
        if (todayVisitOrder.length > 0) {
            todayVisitOrder.forEach(async (order) => {
                await updateOrder(order.order_id, { order_status: ORDER_STATUS.ON_GOING });
            });
        }

        const yesterdayEndOrder = await getOngoingOrdersWithYesterdayEnd();
        if (yesterdayEndOrder.length > 0) {
            yesterdayEndOrder.forEach(async (order) => {
                await updateOrder(order.order_id, { order_status: ORDER_STATUS.COMPLETED });
            });
        }

    } catch (error) {
        console.log(error);
    }
};