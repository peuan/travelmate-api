import { Injectable } from '@nestjs/common';
import { UserRepository } from '../repositories/user.repository';

@Injectable()
export class UserService {
  constructor(private userRepository: UserRepository) {}

  createUser() {
    const user = this.userRepository.create({
      name: 'test',
    });

    return this.userRepository.save(user);
  }
}
