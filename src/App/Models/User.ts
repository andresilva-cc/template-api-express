import {
  Table, Column, Model, CreatedAt, UpdatedAt, IsEmail, Length, AllowNull, Unique, Default,
} from 'sequelize-typescript';

@Table
export default class User extends Model {
  @Length({ min: 3, max: 255 })
  @AllowNull(false)
  @Column
  name!: string;

  @IsEmail
  @Length({ max: 254 })
  @Unique
  @AllowNull(false)
  @Column
  email!: string;

  @Length({ max: 60 })
  @AllowNull(false)
  @Column
  password!: string;

  @Default(false)
  @AllowNull(false)
  @Column
  active!: boolean;

  @CreatedAt
  createdAt!: Date;

  @UpdatedAt
  updatedAt!: Date;
}
