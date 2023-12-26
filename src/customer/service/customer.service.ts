import { ProductService } from "src/product/service/product.service";
import { CustomerRepository } from "../repository/customer.repository";
import { Customer } from "../entity/customer.entity";
import { Injectable, NotFoundException } from "@nestjs/common";
import { CreateCustomerDto } from "../dto/create-customer.dto";
import { UpdateCustomerDto } from "../dto/update-customer.dto";
import {
  fromCreatedDtoToEntity,
  fromUpdatedDtoToEntity,
} from "../mapper/customer.mapper";

@Injectable()
export class CustomerService {
  constructor(
    private readonly customerRepository: CustomerRepository,
    private readonly productService: ProductService
  ) {}

  async findAll(): Promise<Customer[]> {
    return await this.customerRepository.findAll();
  }

  async findOne(id: number): Promise<Customer> {
    const customer = await this.customerRepository.findOne(id);

    if (!customer) {
      throw new NotFoundException("Customer not found");
    }

    return customer;
  }

  async create(createCustomerDto: CreateCustomerDto): Promise<Customer> {
    const mappedCustomer = fromCreatedDtoToEntity(createCustomerDto);
    return await this.customerRepository.create(mappedCustomer);
  }

  async update(
    id: number,
    updateCustomerDto: UpdateCustomerDto
  ): Promise<Customer> {
    const customer = await this.customerRepository.findOne(id);

    if (!customer) {
      throw new NotFoundException("Customer not found");
    }

    const mappedCustomer = fromUpdatedDtoToEntity(updateCustomerDto);
    return await this.customerRepository.update(id, mappedCustomer);
  }

  async remove(id: number): Promise<void> {
    const customer = await this.customerRepository.findOne(id);

    if (!customer) {
      throw new NotFoundException("Customer not found");
    }

    return await this.customerRepository.remove(id);
  }
}
