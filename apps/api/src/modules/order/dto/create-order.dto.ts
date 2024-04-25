import { IsArray, IsNumber, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { ProductExists } from 'src/modules/product/product-exists.validator';
import { HasUniqueProducts } from 'src/modules/product/has-unique-products.validator';

class ItemDto {
  @IsNumber()
  @ProductExists()
  productId: number;

  @IsNumber()
  quantity: number;
}

export class CreateOrderDto {
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ItemDto)
  @HasUniqueProducts()
  items: ItemDto[];
}
