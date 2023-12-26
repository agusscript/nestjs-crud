import { Module } from "@nestjs/common";
import { CustomerController } from "./controller/customer.controller";
import { CustomerService } from "./service/customer.service";
import { CustomerRepository } from "./repository/customer.repository";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Customer } from "./entity/customer.entity";
import { ProductsModule } from "src/product/product.module";

@Module({
  imports: [TypeOrmModule.forFeature([Customer]), ProductsModule],
  controllers: [CustomerController],
  providers: [CustomerService, CustomerRepository],
})
export class CustomerModule {}
