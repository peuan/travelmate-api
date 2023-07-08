import { PassportStrategy } from '@nestjs/passport';
import { HttpStatus, Injectable, UnauthorizedException } from '@nestjs/common';
import { Strategy, ExtractJwt } from 'passport-firebase-jwt';
import { FirebaseAdminService } from 'src/core/firebase-admin/firebase-admin.service';
import { ErrorCode } from 'src/common/enums/error-code.enum';

@Injectable()
export class FirebaseAuthStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly firebaseAdminService: FirebaseAdminService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    });
  }

  async validate(token: string) {
    return this.firebaseAdminService
      .getAuth()
      .verifyIdToken(token, true)
      .catch((err) => {
        console.log(err);
        throw new UnauthorizedException({
          code: ErrorCode.UNAUTHORIZED,
          statusCode: HttpStatus.UNAUTHORIZED,
        });
      });

    // TODO: Link data to database
  }
}
