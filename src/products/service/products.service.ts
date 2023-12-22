import { Inject, Injectable } from "@nestjs/common";
import { CreateProductDto } from "../dto/create-product.dto";
import { UpdateProductDto } from "../dto/update-product.dto";
import { Repository } from "typeorm";
import { Product } from "../entity/product.entity";

@Injectable()
export class ProductService {
  constructor(
    @Inject("PRODUCT_REPOSITORY") private productRepository: Repository<Product>
  ) {}

  findAll() {
    return this.productRepository.find();
  }

  findOne(id: number) {
    return this.productRepository.findOneBy({ id });
  }

  create(createProductDto: CreateProductDto) {
    const newProduct = this.productRepository.create(createProductDto);
    return this.productRepository.save(newProduct);
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return this.productRepository.update({ id }, updateProductDto);
  }

  remove(id: number) {
    return this.productRepository.delete(id);
  }
}
