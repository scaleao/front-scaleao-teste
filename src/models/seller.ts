import { Sale } from './sale';
import { Model } from './model';
import { Expose, Transform, Type } from 'class-transformer';
import moment, { Moment } from 'moment';

class Seller extends Model {
  @Expose()
  public name: string;

  @Expose()
  public email: string;

  @Expose()
  public total_commission: number;

  @Expose({ name: 'sales' })
  @Type(() => Sale)
  public sales: Sale[] | null;

  constructor(
    id: number | null,
    createdAt: Moment,
    updatedAt: Moment,
    deletedAt: Moment | null,
    name: string,
    email: string,
    total_commission: number,
    sales: Sale[] | null,
  ) {
    super(id, createdAt, updatedAt, deletedAt);

    this.name = name;
    this.email = email;
    this.total_commission = total_commission;
    this.sales = sales;
  }
}

export { Seller };
