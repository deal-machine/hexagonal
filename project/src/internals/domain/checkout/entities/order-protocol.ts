import { OrderItem } from "./order-item.ts";

export type OrderConstructor = {
  id: string;
  customerId: string;
  items: OrderItem[];
};

export interface IOrder {
  get total(): number;
  get id(): string;
  get customerId(): string;
  get items(): OrderItem[];
}