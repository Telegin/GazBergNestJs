import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsModule } from './products/products.module';
import { UsersModule } from './users/users.module';
import { OrdersModule } from './orders/orders.module';
import { AppController } from './app.controller'; // Импортируем контроллер

@Module({
  imports: [
    // Подключение к базе данных
    TypeOrmModule.forRoot({
      type: 'postgres', // или другой тип базы данных, например, 'mysql' или 'sqlite'
      host: 'localhost', // Адрес базы данных
      port: 5432, // Порт для подключения к базе данных
      username: 'gazberg', // Имя пользователя, которое вы создали
      password: 'DataBerg4ever', // Пароль пользователя
      database: 'online_store', // Имя базы данных, которую вы создали
      entities: [__dirname + '/**/*.entity{.ts,.js}'], // Путь к файлам сущностей
      synchronize: true, // Автоматическая синхронизация структуры базы данных (только для разработки)
    }),

    // Модули приложения
    ProductsModule,  // Модуль для управления товарами
    UsersModule,     // Модуль для управления пользователями
    OrdersModule,    // Модуль для управления заказами
  ],
  controllers: [AppController], // Регистрируем контроллер
})
export class AppModule {}



