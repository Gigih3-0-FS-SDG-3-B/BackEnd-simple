import { prisma } from '../index.js'

export async function queryOrderStatus() {
    const allStatus = await prisma.order_status.findMany()
    return allStatus
}