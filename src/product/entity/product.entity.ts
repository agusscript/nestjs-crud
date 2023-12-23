import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

export enum allowedCategories {
  BOOKS = "Books",
  CLOTHES = "Clothes",
  ELECTRONICS = "Electronics",
  FURNITURE = "Furniture",
  TOYS = "Toys",
  OTHERS = "Others",
}

@Entity({ name: "products" })
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
}
