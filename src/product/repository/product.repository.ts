import { Repository } from "typeorm";
import { Product } from "../entity/product.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { NotFoundException } from "@nestjs/common";
import { retry } from "rxjs";

export class ProductRepository {
  constructor(
    @InjectRepository(Product) private readonly repository: Repository<Product>
  ) {}

  async findAll(): Promise<Product[]> {
    return await this.repository.find();
  }

  async findOne(id: number): Promise<Product> {
    return await this.repository.findOneBy({ id });
  }

  async create(product: Product): Promise<Product> {
    return await this.repository.save(product);
  }

  async update(id: number, product: Product): Promise<Product> {
    const { affected } = await this.repository.update(id, product);

    if (!affected) {
      throw new NotFoundException("Product not found");
    }

    return await this.repository.findOneBy({ id });
  }

  async remove(id: number): Promise<true> {
    const { affected } = await this.repository.delete(id);

    if (!affected) {
      throw new NotFoundException("Product not found");
    }

    return true;
  }
}
