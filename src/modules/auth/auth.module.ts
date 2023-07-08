import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { AuthService } from './services/auth.service';
import { AuthController } from './controllers/auth.controller';
import { UserModule } from 'src/modules/user/user.module';
import { FirebaseAuthStrategy } from './strategires/firebase-auth.strategy';

@Module({
  imports: [
    UserModule,
    PassportModule.register({ defaultStrategy: 'firebase-jwt' }),
  ],
  providers: [AuthService, FirebaseAuthStrategy],
  controllers: [AuthController],
})
export class AuthModule {}
