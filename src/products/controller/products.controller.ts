import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from "@nestjs/common";
import { ProductService } from "../service/products.service";
import { CreateProductDto } from "../dto/create-product.dto";

@Controller("products")
export class ProductController {
  constructor(private productService: ProductService) {
    this.productService = productService;
  }

  @Get()
  findAll() {
    return this.productService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: number) {
    return this.productService.findOne(id);
  }

  @Post()
  create(@Body() createProductDto: CreateProductDto) {
    return this.productService.create(createProductDto);
  }

  @Put(":id")
  update(@Param("id") id: number, @Body() updateProductDto) {
    return this.productService.update(id, updateProductDto);
  }

  @Delete(":id")
  remove(@Param("id") id: number) {
    return this.productService.remove(id);
  }
}
