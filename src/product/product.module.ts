import { Module } from "@nestjs/common";
import { ProductController } from "./controller/product.controller";
import { ProductService } from "./service/product.service";
import { ProductRepository } from "./repository/product.repository";
import { Product } from "./entity/product.entity";
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
  imports: [TypeOrmModule.forFeature([Product])],
  controllers: [ProductController],
  providers: [ProductService, ProductRepository],
})
export class ProductsModule {}
