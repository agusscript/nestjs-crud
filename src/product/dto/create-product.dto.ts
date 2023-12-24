import { allowedCategories } from "../entity/product.entity";
import { IsIn, IsNotEmpty, IsString} from "class-validator";

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
}
