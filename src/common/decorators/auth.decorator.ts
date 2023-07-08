import { UseGuards, applyDecorators } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import {
  ApiForbiddenResponse,
  ApiUnauthorizedResponse,
  ApiBearerAuth,
} from '@nestjs/swagger';

import { Roles } from './roles.decorator';
import { Role } from 'src/common/enums/role.enum';

export function Auth(roles?: Role[]) {
  if (roles) {
    return applyDecorators(
      Roles(roles),
      UseGuards(AuthGuard('firebase-jwt')),
      ApiBearerAuth('access-token'),
      ApiUnauthorizedResponse({ description: 'Unauthorized' }),
      ApiForbiddenResponse({
        description: 'You do not have permission',
      }),
    );
  }

  return applyDecorators(
    UseGuards(AuthGuard('firebase-jwt')),
    ApiUnauthorizedResponse({ description: 'Unauthorized' }),
    ApiBearerAuth('access-token'),
  );
}
