import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AuthService } from 'src/modules/auth/services/auth.service';
import { CreateFirebaseUserDto } from 'src/modules/auth/dtos/create-firebase-user.dto';
import { Auth } from 'src/common/decorators/auth.decorator';
import { CurrentUser } from 'src/common/decorators/current-user.decorator';
import { User } from 'src/modules/user/entities/user.entity';

@Controller('auth')
@ApiTags('Auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  createUser(@Body() createFirebaseUserDto: CreateFirebaseUserDto) {
    return this.authService.createUser(createFirebaseUserDto);
  }

  @Auth()
  @Get('me')
  getMyProfile(@CurrentUser() user: User) {
    return user;
  }
}
