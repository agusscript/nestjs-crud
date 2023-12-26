import { InjectRepository } from "@nestjs/typeorm";
import { Customer } from "../entity/customer.entity";
import { Repository } from "typeorm";

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
    await this.repository.update({ id }, customer);
    return customer;
  }

  async remove(id: number): Promise<void> {
    await this.repository.delete(id);
  }
}
