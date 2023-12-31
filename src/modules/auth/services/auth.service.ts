import { BadRequestException, HttpStatus, Injectable } from '@nestjs/common';
import { FirebaseAdminService } from 'src/core/firebase-admin/firebase-admin.service';
import { CreateFirebaseUserDto } from 'src/modules/auth/dtos/create-firebase-user.dto';
import { ErrorCode } from 'src/common/enums/error-code.enum';
import { UserService } from 'src/modules/user/services/user.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly firebaseAdminService: FirebaseAdminService,
    private readonly userService: UserService,
  ) {}

  async createUser(createFirebaseUserDto: CreateFirebaseUserDto) {
    // validate exiting email
    await this.firebaseAdminService
      .getAuth()
      .getUserByEmail(createFirebaseUserDto.email)
      .catch(() => undefined)
      .then((user) => {
        if (user) {
          throw new BadRequestException({
            code: ErrorCode.EMAIL_ALREADY_EXIST,
            statusCode: HttpStatus.BAD_REQUEST,
          });
        }
      });

    const newFirebaseUser = await this.firebaseAdminService
      .getAuth()
      .createUser({
        email: createFirebaseUserDto.email,
        password: createFirebaseUserDto.password,
      });

    return this.userService.createUser({
      uid: newFirebaseUser.uid,
      email: newFirebaseUser.email,
    });
  }
}
