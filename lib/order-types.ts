export type OrderCustomer = {
  name: string;
  email: string;
  phone?: string;
  address: string;
  city: string;
  postalCode: string;
  country: string;
};

export type OrderItem = {
  planId: string;
  name: string;
  price: number;
  quantity: number;
};

export type OrderTotals = {
  subtotal: number;
  discount: number;
  addOn: number;
  shipping: number;
  total: number;
};

export type OrderRecord = {
  id: string;
  createdAt: string;
  status: "confirmed";
  customer: OrderCustomer;
  items: OrderItem[];
  addOn: boolean;
  promo: string | null;
  totals: OrderTotals;
  estimatedDelivery: string;
};
