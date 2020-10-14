

// Interfaces for Customers classes

export interface ICustomer {
  id: number;
  name: string;
  city: string;
  orderTotal?: number;  // the ? specifies an optional paramter for this interface
  customerSince: any;
}

export interface IOrder {
  customerId: number;
  orderItems: IOrderItem[];
}

export interface IOrderItem {
  id: number;
  productName: string;
  itemCost: number;
}
