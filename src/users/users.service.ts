import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { User, Prisma } from '@prisma/client';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) { }

  async createUser(data: Prisma.UserCreateInput): Promise<User> {
    return this.prisma.user.create({
      data,
    });
  }

  // findAll() {
  //   return `This action returns all users`;
  // }

  findOne(id: string) {
    return this.prisma.user.findUnique({
      where: {
        id
      }
    })
    ;
  }

  findOneByEmail(email: string) {
    return this.prisma.user.findUnique({
      where: {
        email
      }
    })
    ;
  }

  update(id: string, data: Prisma.UserUpdateInput): Promise<User> {
    return this.prisma.user.update({data, 'where': { id }});
  }

  // remove(id: number) {
  //   return `This action removes a #${id} user`;
  // }
}
