import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './product.entity';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private productRepository: Repository<Product>,
  ) {}

  // Получение всех продуктов
  findAll(): Promise<Product[]> {
    return this.productRepository.find();
  }

  // Получение одного продукта по ID
  findOne(id: number): Promise<Product> {
    return this.productRepository.findOneBy({ id });
  }

  // Создание нового продукта
  create(product: Partial<Product>): Promise<Product> {
    const newProduct = this.productRepository.create(product);
    return this.productRepository.save(newProduct);
  }

  // Обновление существующего продукта
  async update(id: number, product: Partial<Product>): Promise<void> {
    await this.productRepository.update(id, product);
  }

  // Удаление продукта по ID
  async remove(id: number): Promise<void> {
    await this.productRepository.delete(id);
  }
}
