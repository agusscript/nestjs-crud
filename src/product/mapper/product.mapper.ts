import { Product } from "../entity/product.entity";
import { CreateProductDto } from "../dto/create-product.dto";
import { UpdateProductDto } from "../dto/update-product.dto";

export function fromCreatedDtoToEntity(source: CreateProductDto): Product {
  const mappedProduct = new Product();
  mappedProduct.name = source.name;
  mappedProduct.category = source.category;
  mappedProduct.description = source.description;

  return mappedProduct;
}

export function fromUpdatedDtoToEntity(source: UpdateProductDto): Product {
  const mappedProduct = new Product();
  mappedProduct.id = source.id;
  mappedProduct.name = source.name;
  mappedProduct.category = source.category;
  mappedProduct.description = source.description;

  return mappedProduct;
}
