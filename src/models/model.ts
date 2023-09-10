import { Expose, Transform } from 'class-transformer';
import moment, { Moment } from 'moment';

class Model {
  @Expose()
  public id: number | null;

  @Expose({ name: 'created_at' })
  @Transform(({ value }) => moment(value), { toClassOnly: true })
  @Transform(({ value }) => value.format(), { toPlainOnly: true })
  public createdAt: Moment;

  @Expose({ name: 'updated_at' })
  @Transform(({ value }) => (value ? moment(value) : null), { toClassOnly: true })
  @Transform(({ value }) => (value ? value.format() : null), { toPlainOnly: true })
  public updatedAt: Moment | null;

  @Expose({ name: 'deleted_at' })
  @Transform(({ value }) => (value ? moment(value) : null), { toClassOnly: true })
  @Transform(({ value }) => (value ? value.format() : null), { toPlainOnly: true })
  public deletedAt: Moment | null;

  constructor(id: number | null, createdAt: Moment, updatedAt: Moment, deletedAt: Moment | null) {
    this.id = id || null;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.deletedAt = deletedAt;
  }
}

export { Model };
