import { CustomerService } from "../service/customer.service";
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from "@nestjs/common";
import { Customer } from "../entity/customer.entity";
import { CreateCustomerDto } from "../dto/create-customer.dto";
import { UpdateCustomerDto } from "../dto/update-customer.dto";

@Controller("customer")
export class CustomerController {
  constructor(private readonly customerService: CustomerService) {}

  @Get()
  async findAll(): Promise<Customer[]> {
    return await this.customerService.findAll();
  }

  @Get(":id")
  async findOne(@Param("id") id: number): Promise<Customer> {
    return await this.customerService.findOne(id);
  }

  @Post()
  async create(
    @Body() createCustomerDto: CreateCustomerDto
  ): Promise<Customer> {
    return await this.customerService.create(createCustomerDto);
  }

  @Put(":id")
  async update(
    @Param("id") id: number,
    @Body() updateCustomerDto: UpdateCustomerDto
  ): Promise<Customer> {
    return await this.customerService.update(id, updateCustomerDto);
  }

  @Delete(":id")
  async remove(@Param("id") id: number): Promise<true> {
    return await this.customerService.remove(id);
  }
}
