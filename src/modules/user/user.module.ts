import { Module } from '@nestjs/common';
import { UserService } from './services/user.service';
import { UserController } from './controllers/user.controller';
import { UserRepository } from './repositories/user.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Role } from './entities/role.entity';
import { RoleRepository } from './repositories/role.repository';

@Module({
  imports: [TypeOrmModule.forFeature([User, Role])],
  providers: [UserService, UserRepository, RoleRepository],
  controllers: [UserController],
  exports: [UserService, UserRepository, RoleRepository],
})
export class UserModule {}
