import { Injectable } from '@nestjs/common';
import { UserRepository } from 'src/modules/user/repositories/user.repository';
import { CreateUserDto } from 'src/modules/user/dtos/create-user.dto';
import { Role as RoleEnum } from 'src/common/enums/role.enum';
import { RoleRepository } from 'src/modules/user/repositories/role.repository';

@Injectable()
export class UserService {
  constructor(
    private userRepository: UserRepository,
    private roleRepository: RoleRepository,
  ) {}

  async createUser(createUserDto: CreateUserDto) {
    const newUser = this.userRepository.create(createUserDto);

    const user = await this.userRepository.save(newUser);
    const newRole = this.roleRepository.create({
      code: RoleEnum.USER,
      user: user,
    });
    const role = await this.roleRepository.save(newRole);
    user.roles = [role];

    return user;
  }
}
