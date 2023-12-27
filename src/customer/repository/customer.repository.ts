import { InjectRepository } from "@nestjs/typeorm";
import { Customer } from "../entity/customer.entity";
import { Repository } from "typeorm";
import { NotFoundException } from "@nestjs/common";

export class CustomerRepository {
  constructor(
    @InjectRepository(Customer)
    private readonly repository: Repository<Customer>
  ) {}

  async findAll(): Promise<Customer[]> {
    return await this.repository.find({
      relations: {
        products: true,
      },
    });
  }

  async findOne(id: number): Promise<Customer> {
    return await this.repository.findOneBy({ id });
  }

  async create(customer: Customer): Promise<Customer> {
    return await this.repository.save(customer);
  }

  async update(id: number, customer: Customer): Promise<Customer> {
    const { affected } = await this.repository.update(id, customer);

    if (!affected) {
      throw new NotFoundException("Product not found");
    }

    return await this.findOne(id);
  }

  async remove(id: number): Promise<true> {
    const { affected } = await this.repository.delete(id);

    if (!affected) {
      throw new NotFoundException("Product not found");
    }

    return true;
  }
}
