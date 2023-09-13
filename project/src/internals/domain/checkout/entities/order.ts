import { IOrder, OrderConstructor } from "./order-protocol.ts";
import { AttributeException } from "@shared/errors/attribute.error.ts";
import { DomainException } from "@shared/errors/domain.error.ts";
import { OrderItem } from "./order-item.ts";

export class Order implements IOrder {
  private _id: string;
  private _customerId: string;
  private _items: OrderItem[];
  private _total: number;

  constructor({ id, customerId, items }: OrderConstructor) {
    this.validate({ id, customerId, items });

    this._id = id;
    this._customerId = customerId;
    this._items = items;
    this._total = this.sumTotal();
  }

  private validate({ id, customerId, items }: OrderConstructor) {
    if (!id) throw new AttributeException("id is required");

    if (!customerId)
      throw new DomainException("Order must have a linked customerId");

    if (!items || items.length < 1)
      throw new DomainException("Order must include at least one OrderItem");
  }

  private sumTotal(): number {
    return this._items.reduce((acc, item) => acc + item.total(), 0);
  }

  get total(): number {
    return this._total;
  }

  get id(): string {
    return this._id;
  }

  get customerId(): string {
    return this._customerId;
  }

  get items(): OrderItem[] {
    return this._items;
  }
}