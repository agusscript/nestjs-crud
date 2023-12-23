import { allowedCategories } from "../entity/product.entity";

export class UpdateProductDto {
    id: number;
    name?: string;
    category?: allowedCategories;
    description?: string;
  }
  