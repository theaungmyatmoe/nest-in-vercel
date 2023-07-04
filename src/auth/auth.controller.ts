import { Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signup')
  async signup() {
    return this.authService.signup();
  }

  @Post('signin')
  async signin() {
    return this.authService.signin();
  }
}
