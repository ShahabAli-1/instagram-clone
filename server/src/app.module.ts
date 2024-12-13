import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as dotenv from 'dotenv';
dotenv.config();
@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost', 
    port: 5433,
    username: process.env.USERNAME,
    password: process.env.PASSWORD,
    database: process.env.DATABASE, 
    synchronize: true, 
  })
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
