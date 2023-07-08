import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, Length } from 'class-validator';

export class CreateFirebaseUserDto {
  @ApiProperty({
    example: 'test@test.com',
    description: 'unique and allow only email format',
  })
  @IsNotEmpty()
  @IsEmail({})
  email: string;

  @IsNotEmpty()
  @Length(7, 200)
  password: string;
}
