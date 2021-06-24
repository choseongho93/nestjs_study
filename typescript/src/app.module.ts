import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatiscuteModule } from './catiscute/catiscute.module';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductModule } from './product/product.module';

@Module({
  //imports: [CatiscuteModule, UsersModule, TypeOrmModule.forRoot(), ProductModule],
  imports: [TypeOrmModule.forRoot(), ProductModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
