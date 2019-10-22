import { ReviewOfRenter } from './review-of-renter';
import { User } from 'src/app/models/user';
import { Tool } from './tool';

export class ToolRental {
  id: number;
  checkout: Date;
  returned: Date;
  totalCost: number;
  createDate: string;
  updateDate: string;
  tool: Tool;
  renter: ReviewOfRenter;

  constructor(
    id?: number,
    checkout?: Date,
    returned?: Date,
    totalCost?: number,
    createDate?: string,
    updateDate?: string,
    tool?: Tool,
    renter?: ReviewOfRenter
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
