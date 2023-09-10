import { Model } from './model';
import { Expose } from 'class-transformer';
import moment, { Moment } from 'moment';

class Sale extends Model {
  @Expose()
  public seller_id: number;

  @Expose()
  public amount: number;

  @Expose()
  public comission: number;

  constructor(
    id: number | null,
    createdAt: Moment,
    updatedAt: Moment,
    deletedAt: Moment | null,
    seller_id: number,
    amount: number,
    comission: number,
  ) {
    super(id, createdAt, updatedAt, deletedAt);

    this.seller_id = seller_id;
    this.amount = amount;
    this.comission = comission;
  }
}

export { Sale };
