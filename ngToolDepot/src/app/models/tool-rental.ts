export class ToolRental {
  id: number;
  checkout: string;
  returned: string;
  totalCost: number;
  createDate: string;
  updateDate: string;
  tool: object;
  renter: object;

  constructor(
    id?: number,
    checkout?: string,
    returned?: string,
    totalCost?: number,
    createDate?: string,
    updateDate?: string,
    tool?: object,
    renter?: object
  ) {
    this.id = id;
    this.checkout = checkout;
    this.returned = returned;
    this.totalCost = totalCost;
    this.createDate = createDate;
    this.updateDate = updateDate;
    this.tool = tool;
    this.renter = renter;
  }
}
