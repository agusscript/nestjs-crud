import { IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class UpdateCustomerDto {
  id: number;

  @IsString()
  @IsOptional()
  name?: string;
}
