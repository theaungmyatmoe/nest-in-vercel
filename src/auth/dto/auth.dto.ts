import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
import { Optional } from '@nestjs/common';

export class AuthDto {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  @IsString()
  password: string;

  @Optional()
  firstName: string;

  @Optional()
  lastName: string;
}
