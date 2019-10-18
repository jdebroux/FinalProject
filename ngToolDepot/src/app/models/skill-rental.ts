export class SkillRental {
  id: number;
  startDate: string;
  estimatedFinishDate: string;
  finishDate: string;
  hours: number;
  createDate: string;
  updateDate: string;
  renter: object;
  userSkill: object;

  constructor(
    id?: number,
    startDate?: string,
    estimatedFinishDate?: string,
    finishDate?: string,
    hours?: number,
    createDate?: string,
    updateDate?: string,
    renter?: object,
    userSkill?: object
  ) {
    this.id = id;
    this.startDate = startDate;
    this.estimatedFinishDate = estimatedFinishDate;
    this.finishDate = finishDate;
    this.hours = hours;
    this.createDate = createDate;
    this.updateDate = updateDate;
    this.renter = renter;
    this.userSkill = userSkill;
  }
}
