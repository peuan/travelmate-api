import { IsEmail, IsNotEmpty, Length } from 'class-validator';

export class CreateFirebaseUserDto {
  @IsNotEmpty()
  @IsEmail({})
  email: string;

  @IsNotEmpty()
  @Length(7, 200)
  password: string;
}
