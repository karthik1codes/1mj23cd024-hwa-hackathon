import { NextResponse } from "next/server";

import { getOrder, maskEmail } from "@/lib/orders";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

const cors = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET,OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Accept",
  "Cache-Control": "no-store",
};

export async function OPTIONS() {
  return new NextResponse(null, { status: 204, headers: cors });
}

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;
  const order = await getOrder(id);

  if (!order) {
    return NextResponse.json(
      { ok: false, error: "Order not found." },
      { status: 404, headers: cors },
    );
  }

  return NextResponse.json(
    {
      ok: true,
      order: {
        id: order.id,
        status: order.status,
        createdAt: order.createdAt,
        items: order.items,
        addOn: order.addOn,
        promo: order.promo,
        totals: order.totals,
        estimatedDelivery: order.estimatedDelivery,
        customer: {
          name: order.customer.name.split(" ")[0],
          email: maskEmail(order.customer.email),
          city: order.customer.city,
          country: order.customer.country,
        },
      },
    },
    { headers: cors },
  );
}
