import { Module } from '@nestjs/common';
import { Product } from './product';
import { ProductsService } from './product.service';
import { ProductsController } from './product.controller';
import{ TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Product])],
  controllers: [ProductsController],
  providers: [ProductsService]
})
export class ProductModule {}
