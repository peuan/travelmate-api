import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { EventEmitterModule } from '@nestjs/event-emitter';
import dataSource from './db/data-source';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot(dataSource.options),
    EventEmitterModule.forRoot({ global: true }),
  ],
  exports: [TypeOrmModule],
})
export class CoreModule {}
