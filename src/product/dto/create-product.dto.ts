import { allowedCategories } from "../entity/product.entity";

export class CreateProductDto {
  name: string;
  category: allowedCategories;
  description: string;
}
