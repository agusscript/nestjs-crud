import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from "@nestjs/common";
import { ProductService } from "../service/product.service";
import { CreateProductDto } from "../dto/create-product.dto";
import { Product } from "../entity/product.entity";

@Controller("product")
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  async findAll(): Promise<Product[]> {
    return await this.productService.findAll();
  }

  @Get(":id")
  async findOne(@Param("id") id: number): Promise<Product> {
    return await this.productService.findOne(id);
  }

  @Post()
  async create(@Body() createProductDto: CreateProductDto): Promise<Product> {
    return await this.productService.create(createProductDto);
  }

  @Put(":id")
  async update(
    @Param("id") id: number,
    @Body() updateProductDto
  ): Promise<Product> {
    return await this.productService.update(id, updateProductDto);
  }

  @Delete(":id")
  async remove(@Param("id") id: number): Promise<true> {
    return await this.productService.remove(id);
  }
}
