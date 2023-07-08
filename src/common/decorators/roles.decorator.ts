import { SetMetadata, CustomDecorator } from '@nestjs/common';
import { Role } from 'src/common/enums/role.enum';

export const Roles = (roles: Role[]): CustomDecorator<string> => {
  return SetMetadata('roles', roles);
};
