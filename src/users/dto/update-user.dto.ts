import { PartialType } from '@nestjs/mapped-types';
import {
  IsBoolean,
  IsEmail,
  IsNotEmpty,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';
import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  @IsString()
  firstName: string;

  @IsString()
  lastName: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @MinLength(6)
  @MaxLength(20)
  password: string;

  active?: boolean;
}
