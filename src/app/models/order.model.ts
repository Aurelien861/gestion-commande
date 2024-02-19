export interface Order {
  id?: string,
  clientName?: string,
  sellerName?: string,
  date?: string,
  totalPrice?: number,
  materialIds?: string[],
  clientId?: string,
  sellerId?: string
}
