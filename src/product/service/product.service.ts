import { Injectable } from "@nestjs/common";
import { CreateProductDto } from "../dto/create-product.dto";
import { UpdateProductDto } from "../dto/update-product.dto";
import { ProductRepository } from "../repository/product.repository";
import { Product } from "../entity/product.entity";
import {
  fromCreatedDtoToEntity,
  fromUpdatedDtoToEntity,
} from "../mapper/product.mapper";

@Injectable()
export class ProductService {
  constructor(private readonly productRepository: ProductRepository) {}

  async findAll(): Promise<Product[]> {
    return await this.productRepository.findAll();
  }

  async findOne(id: number): Promise<Product> {
    return await this.productRepository.findOne(id);
  }

  async create(createProductDto: CreateProductDto): Promise<Product> {
    const mappedProduct = fromCreatedDtoToEntity(createProductDto);
    return await this.productRepository.create(mappedProduct);
  }

  async update(id: number, updateProductDto: UpdateProductDto): Promise<Product>  {
    const mappedProduct = fromUpdatedDtoToEntity(updateProductDto);
    return await this.productRepository.update(id, mappedProduct);
  }

  async remove(id: number): Promise<void> {
    return await this.productRepository.remove(id);
  }
}
