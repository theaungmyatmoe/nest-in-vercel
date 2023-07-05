import { Body, ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { AuthDto } from './dto';
import * as argon from 'argon2';
import { User } from '@prisma/client';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthService {
  constructor(
    private configService: ConfigService,
    private prisma: PrismaService,
    private jwtService: JwtService,
  ) {}

  async signup(authDto: AuthDto) {
    try {
      const hash = await argon.hash(authDto.password);
      const user = await this.prisma.user.create({
        data: {
          email: authDto.email,
          password: hash,
          firstName: authDto?.firstName,
          lastName: authDto?.lastName,
        },
      });
      return user;
    } catch (error) {
      throw new ForbiddenException('Email already exists');
    }
  }

  async signin(authDto: AuthDto) {
    const user = await this.prisma.user.findUnique({
      where: {
        email: authDto.email,
      },
    });
    if (!user) {
      throw new ForbiddenException('Email or password is wrong');
    }

    // compare password
    const isMatch = await argon.verify(user.password, authDto.password);
    if (!isMatch) {
      throw new ForbiddenException('Email or password is wrong');
    }

    const token = await this.signToken(user);
    return {
      access_token: token,
    };
  }

  async signToken(user: User) {
    const payload = { email: user.email, sub: user.id };
    return await this.jwtService.signAsync(payload, {
      secret: this.configService.get('JWT_SECRET'),
      expiresIn: '15m',
    });
  }
}
