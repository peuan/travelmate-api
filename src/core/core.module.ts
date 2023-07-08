import { Global, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { EventEmitterModule } from '@nestjs/event-emitter';
import dataSource from './db/data-source';
import { FirebaseAdminModule } from './firebase-admin/firebase-admin.module';

@Global()
@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      ...dataSource.options,
      autoLoadEntities: true,
    }),
    EventEmitterModule.forRoot({ global: true }),
    FirebaseAdminModule,
  ],
  exports: [TypeOrmModule, FirebaseAdminModule],
})
export class CoreModule {}
