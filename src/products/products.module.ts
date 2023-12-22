import { Module } from "@nestjs/common";
import { ProductController } from "./controller/products.controller";
import { ProductService } from "./service/products.service";
import { productProviders } from "./repository/product.providers";
import { DatabaseModule } from "./repository/database.module";

@Module({
  imports: [DatabaseModule],
  controllers: [ProductController],
  providers: [ProductService, ...productProviders],
})
export class ProductsModule {}
