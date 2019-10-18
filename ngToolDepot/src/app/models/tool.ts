export class Tool {
  id: number;
  name: string;
  description: string;
  type: string;
  costPerDay: number;
  available: boolean;
  manufactureYear: string;
  condition: string;
  owner: object;

  constructor(
    id?: number,
    name?: string,
    description?: string,
    type?: string,
    costPerDay?: number,
    available?: boolean,
    manufactureYear?: string,
    condition?: string,
    owner?: object
  ) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.type = type;
    this.costPerDay = costPerDay;
    this.available = available;
    this.manufactureYear = manufactureYear;
    this.condition = condition;
    this.owner = owner;
  }
}
