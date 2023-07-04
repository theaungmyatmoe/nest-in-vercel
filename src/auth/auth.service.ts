import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
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
