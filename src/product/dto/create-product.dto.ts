import { allowedCategories } from "../entity/product.entity";
import { IsIn, IsNotEmpty, IsString, IsNumber } from "class-validator";

export class CreateProductDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  @IsIn(Object.values(allowedCategories))
  category: allowedCategories;

  @IsString()
  description: string;

  @IsNumber()
  customerId: number;

  @IsNumber()
  quantity: number;
}
