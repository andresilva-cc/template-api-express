import {
  Table, Column, Model, Length, AllowNull, BelongsTo, DataType, ForeignKey, PrimaryKey,
} from 'sequelize-typescript';
import User from './User';

@Table({
  timestamps: false,
})
class UserActivation extends Model {
  @AllowNull(false)
  @ForeignKey(() => User)
  @PrimaryKey
  @Column
  userId!: number;

  @BelongsTo(() => User)
  user!: User;

  @Length({ min: 21, max: 21 })
  @AllowNull(false)
  @Column(DataType.CHAR)
  token!: string;
}

export default UserActivation;
