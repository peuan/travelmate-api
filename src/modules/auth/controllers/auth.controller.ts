import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from '../services/auth.service';
import { CreateFirebaseUserDto } from '../dtos/create-firebase-user.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  createUser(@Body() createFirebaseUserDto: CreateFirebaseUserDto) {
    return this.authService.createUser(createFirebaseUserDto);
  }
}
