import { User } from 'src/app/models/user';
import { Tool } from './tool';

export class ToolRental {
  id: number;
  checkout: Date;
  returned: Date;
  totalCost: number;
  createDate: string;
  updateDate: string;
  tool: object;
  renter: object;

  constructor(
    id?: number,
    checkout?: Date,
    returned?: Date,
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
