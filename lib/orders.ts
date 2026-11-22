import { promises as fs } from "fs";
import { tmpdir } from "os";
import path from "path";

import type { OrderRecord } from "@/lib/order-types";

const FILE = path.join(tmpdir(), "pawpal-orders.json");

type Store = {
  orders: OrderRecord[];
  subscribers: string[];
};

declare global {
  // eslint-disable-next-line no-var
  var __pawpalStore: Store | undefined;
}

const store: Store =
  globalThis.__pawpalStore ?? (globalThis.__pawpalStore = { orders: [], subscribers: [] });

async function persist() {
  try {
    await fs.writeFile(
      FILE,
      JSON.stringify({ orders: store.orders.slice(-200), subscribers: store.subscribers.slice(-500) }),
      "utf8",
    );
  } catch {
    /* best-effort only: serverless filesystems are ephemeral */
  }
}

async function hydrate() {
  if (store.orders.length > 0 || store.subscribers.length > 0) return;
  try {
    const raw = await fs.readFile(FILE, "utf8");
    const data = JSON.parse(raw) as Partial<Store>;
    if (Array.isArray(data.orders)) store.orders.push(...data.orders);
    if (Array.isArray(data.subscribers)) store.subscribers.push(...data.subscribers);
  } catch {
    /* nothing saved yet */
  }
}

export async function saveOrder(order: OrderRecord) {
  await hydrate();
  store.orders.push(order);
  await persist();
  return order;
}

export async function getOrder(id: string) {
  await hydrate();
  return store.orders.find((order) => order.id.toUpperCase() === id.toUpperCase()) ?? null;
}

export async function orderCount() {
  await hydrate();
  return store.orders.length;
}

export async function saveSubscriber(email: string) {
  await hydrate();
  const normalized = email.trim().toLowerCase();
  if (!store.subscribers.includes(normalized)) store.subscribers.push(normalized);
  await persist();
  return store.subscribers.length;
}

export async function subscriberCount() {
  await hydrate();
  return store.subscribers.length;
}

export function makeOrderId() {
  const stamp = Date.now().toString(36).toUpperCase().slice(-5);
  const random = Math.random().toString(36).toUpperCase().slice(2, 5);
  return `PP-${stamp}${random}`;
}

export function deliveryEstimate(days = 6) {
  const date = new Date();
  date.setDate(date.getDate() + days);
  return new Intl.DateTimeFormat("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
  }).format(date);
}

export function maskEmail(email: string) {
  const [user, domain] = email.split("@");
  if (!domain) return "***";
  const visible = user.slice(0, 2);
  return `${visible}${"*".repeat(Math.max(2, user.length - 2))}@${domain}`;
}
