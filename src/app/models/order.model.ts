export interface Order {
  id?: string;
  customerName?: string;
  activeMemberName?: string;
  date?: string;
  totalPrice?: number;
  [key: string]: any;
}
