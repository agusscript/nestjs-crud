import { allowedCategories } from "../entity/product.entity";
import {
  IsNotEmpty,
  IsNumber,
  IsString,
  IsIn,
  IsOptional,
} from "class-validator";

export class UpdateProductDto {
  @IsNumber()
  @IsNotEmpty()
  id: number;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  name?: string;

  @IsString()
  @IsNotEmpty()
  @IsIn(Object.values(allowedCategories))
  @IsOptional()
  category?: allowedCategories;

  @IsString()
  @IsOptional()
  description?: string;

  @IsNumber()
  @IsOptional()
  customerId?: number;

  @IsNumber()
  @IsOptional()
  quantity?: number;
}
