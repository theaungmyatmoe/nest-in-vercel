import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signup')
  async signup(@Body() authDto: AuthDto) {
    console.log(authDto);
    return this.authService.signup();
  }

  @Post('signin')
  async signin() {
    return this.authService.signin();
  }
}
