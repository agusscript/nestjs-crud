import { Customer } from "src/customer/entity/customer.entity";
import { allowedCategories } from "../entity/product.entity";
import {
  IsNotEmpty,
  IsNumber,
  IsString,
  IsIn,
  IsOptional,
} from "class-validator";

export class UpdateProductDto {
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  name: string;

  @IsString()
  @IsNotEmpty()
  @IsIn(Object.values(allowedCategories))
  @IsOptional()
  category: allowedCategories;

  @IsString()
  @IsOptional()
  description: string;

  @IsNumber()
  @IsOptional()
  quantity: number;

  @IsNumber()
  @IsOptional()
  customerId: number;

  @IsOptional()
  customer: Customer;
}
