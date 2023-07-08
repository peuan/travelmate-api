import { Module } from '@nestjs/common';
import { AuthService } from './services/auth.service';
import { AuthController } from './controllers/auth.controller';
import { CoreModule } from 'src/core/core.module';
import { UserModule } from 'src/modules/user/user.module';

@Module({
  imports: [CoreModule, UserModule],
  providers: [AuthService],
  controllers: [AuthController],
})
export class AuthModule {}
