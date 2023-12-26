import { Module } from "@nestjs/common";
import { CustomerController } from "./controller/customer.controller";
import { CustomerService } from "./service/customer.service";
import { CustomerRepository } from "./repository/customer.repository";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Customer } from "./entity/customer.entity";

@Module({
  imports: [TypeOrmModule.forFeature([Customer])],
  controllers: [CustomerController],
  providers: [CustomerService, CustomerRepository],
  exports: [CustomerService],
})
export class CustomerModule {}
