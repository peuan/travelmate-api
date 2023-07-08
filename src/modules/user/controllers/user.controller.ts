import { Controller } from '@nestjs/common';
import { UserService } from 'src/modules/user/services/user.service';

@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}
}
