import { Module } from "@nestjs/common";
import { ProductsModule } from "./product/product.module";
import { TypeOrmModule } from "@nestjs/typeorm";
import { DataSource } from "typeorm";
import { CustomerModule } from "./customer/customer.module";

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: () => ({
        type: "mysql",
        host: "localhost",
        port: 3306,
        username: "root",
        password: "newdb",
        database: "nest",
        entities: [__dirname + "**/**/*.entity{.ts,.js}"],
        synchronize: true,
      }),
      dataSourceFactory: async (options) => {
        return new DataSource(options).initialize();
      },
    }),
    ProductsModule,
    CustomerModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
