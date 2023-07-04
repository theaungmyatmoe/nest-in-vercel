import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';

@Injectable({})
export class UsersService {
  test() {
    return 'test';
  }
}
