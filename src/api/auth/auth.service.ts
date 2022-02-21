import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import { compareSync } from 'bcrypt';

import { UserRepository } from '../../database/repositories/user.repository';

@Injectable()
export class AuthService {
  constructor(
    private userRepository: UserRepository,
    private jwtService: JwtService,
  ) {}

  async validateUser(registration: string, password: string): Promise<any> {
    const user = await this.userRepository.findByRegistration(registration);
    if (user && compareSync(password, user.password)) return user;
    return null;
  }

  async login(user: any) {
    const payload = { registration: user.registration, sub: user.userId };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
