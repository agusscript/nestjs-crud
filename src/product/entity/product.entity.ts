import { Customer } from "src/customer/entity/customer.entity";
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from "typeorm";

export enum allowedCategories {
  BOOKS = "Books",
  CLOTHES = "Clothes",
  ELECTRONICS = "Electronics",
  FURNITURE = "Furniture",
  TOYS = "Toys",
  OTHERS = "Others",
}

@Entity({ name: "product" })
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({
    type: "enum",
    enum: allowedCategories,
    default: allowedCategories.OTHERS,
  })
  category: allowedCategories;

  @Column({ nullable: true })
  description: string;

  @Column({ default: 1 })
  quantity: number;

  @ManyToOne(() => Customer, (customer) => customer.products)
  customer: Customer;
}
