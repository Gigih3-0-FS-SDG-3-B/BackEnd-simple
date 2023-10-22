export async function queryOrderStatus(prisma) {
  const allStatus = await prisma.order_status.findMany();
  return allStatus;
}