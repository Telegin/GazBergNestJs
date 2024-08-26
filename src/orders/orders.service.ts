import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Order } from './order.entity';

@Injectable()
export class OrdersService {
  constructor(
    @InjectRepository(Order)
    private ordersRepository: Repository<Order>,
  ) {}

  findAll(): Promise<Order[]> {
    return this.ordersRepository.find({ relations: ['user', 'product'] });
  }

  findOne(id: number): Promise<Order> {
    return this.ordersRepository.findOneBy({ id });
  }

  create(order: Order): Promise<Order> {
    return this.ordersRepository.save(order);
  }

  async update(id: number, order: Order): Promise<void> {
    await this.ordersRepository.update(id, order);
  }

  async remove(id: number): Promise<void> {
    await this.ordersRepository.delete(id);
  }
}
