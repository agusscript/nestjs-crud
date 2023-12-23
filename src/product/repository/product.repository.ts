import { Repository } from "typeorm";
import { Product } from "../entity/product.entity";
import { InjectRepository } from "@nestjs/typeorm";

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
    await this.repository.update({ id }, product);
    return product;
  }

  async remove(id: number): Promise<void> {
    await this.repository.delete(id);
  }
}
