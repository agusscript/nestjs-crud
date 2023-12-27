import { CreateCustomerDto } from "../dto/create-customer.dto";
import { UpdateCustomerDto } from "../dto/update-customer.dto";
import { Customer } from "../entity/customer.entity";

export function fromCreatedDtoToEntity(source: CreateCustomerDto) {
  const mappedCustomer = new Customer();
  mappedCustomer.name = source.name;

  return mappedCustomer;
}

export function fromUpdatedDtoToEntity(source: UpdateCustomerDto) {
  const mappedCustomer = new Customer();
  mappedCustomer.name = source.name;

  return mappedCustomer;
}
