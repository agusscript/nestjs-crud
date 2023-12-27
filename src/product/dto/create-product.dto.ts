import { Customer } from "src/customer/entity/customer.entity";
import { allowedCategories } from "../entity/product.entity";
import { IsIn, IsNotEmpty, IsString, IsNumber, IsOptional } from "class-validator";

export class CreateProductDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  @IsIn(Object.values(allowedCategories))
  category = allowedCategories.OTHERS;

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
