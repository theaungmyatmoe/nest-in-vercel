import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class AuthService {
  constructor(private readonly prisma: PrismaService) {}
  signup() {
    return {
      message: 'signup',
    };
  }

  signin() {
    return {
      message: 'signin',
    };
  }
}
