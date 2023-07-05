import { Controller, Get, UseGuards, Request } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/guard';
import { GethUser } from '../auth/decorator';
import { User } from '@prisma/client';

@Controller('users')
export class UsersController {
  @UseGuards(JwtAuthGuard)
  @Get('me')
  getProfile(@GethUser() user: User) {
    return user;
  }
}
