import { Controller, Post, Body, Patch, Param, Get } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
//import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) { }

  @Post('create')
  createUser(@Body() createUserDto: CreateUserDto) {
    return this.usersService.createUser(createUserDto);
  }

  /*@Get(':id')
  getUserById(@Param('id') id: string) {
    return this.usersService.findOne(id);
  }*/

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    if (updateUserDto.email) {
      const user = await this.usersService.findOneByEmail(updateUserDto.email);

      if (user && user.id !== id) {
        return { message: "Já existe um usuário com este email!" }
      }
    }
    return this.usersService.update(id, updateUserDto);
  }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.usersService.remove(+id);
  // }
}
