import {
  Table, Column, Model, CreatedAt, UpdatedAt, IsEmail, Length,
} from 'sequelize-typescript';

@Table
export default class User extends Model {
  @Length({ min: 3, max: 255 })
  @Column
  name!: string;

  @IsEmail
  @Length({ max: 254 })
  @Column
  email!: string;

  @Length({ max: 60 })
  @Column
  password!: string;

  @CreatedAt
  createdAt!: Date;

  @UpdatedAt
  updatedAt!: Date;
}
