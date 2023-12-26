import { Injectable, NotFoundException } from "@nestjs/common";
import { CreateProductDto } from "../dto/create-product.dto";
import { UpdateProductDto } from "../dto/update-product.dto";
import { ProductRepository } from "../repository/product.repository";
import { CustomerService } from "src/customer/service/customer.service";
import { Product } from "../entity/product.entity";
import {
  fromCreatedDtoToEntity,
  fromUpdatedDtoToEntity,
} from "../mapper/product.mapper";

@Injectable()
export class ProductService {
  constructor(
    private readonly productRepository: ProductRepository,
    private readonly customerService: CustomerService
  ) {}

  async findAll(): Promise<Product[]> {
    return await this.productRepository.findAll();
  }

  async findOne(id: number): Promise<Product> {
    const product = await this.productRepository.findOne(id);

    if (!product) {
      throw new NotFoundException("Product not found");
    }

    return product;
  }

  async create(createProductDto: CreateProductDto): Promise<Product> {
    const mappedProduct = fromCreatedDtoToEntity(createProductDto);

    const customer = await this.customerService.findOne(
      createProductDto.customerId
    );

    if (!customer) {
      throw new NotFoundException("Customer not found");
    }

    return await this.productRepository.create(mappedProduct);
  }

  async update(
    id: number,
    updateProductDto: UpdateProductDto
  ): Promise<Product> {
    const product = await this.productRepository.findOne(id);

    if (!product) {
      throw new NotFoundException("Product not found");
    }

    const mappedProduct = fromUpdatedDtoToEntity(updateProductDto);

    const customer = await this.customerService.findOne(
      updateProductDto.customerId
    );

    if (!customer) {
      throw new NotFoundException("Customer not found");
    }

    return await this.productRepository.update(id, mappedProduct);
  }

  async remove(id: number): Promise<void> {
    const product = await this.productRepository.findOne(id);

    if (!product) {
      throw new NotFoundException("Product not found");
    }

    return await this.productRepository.remove(id);
  }
}
