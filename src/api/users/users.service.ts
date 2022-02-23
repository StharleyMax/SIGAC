import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';

import { hash } from 'bcrypt';

import { UserRepository } from '../../database/repositories/user.repository';
import { UserDto } from './dto/user.dto';
import { UserResponseDto } from './dto/userResponse.dto';
import { UsersMap } from './map/users.map';

@Injectable()
export class UsersService {
  constructor(private readonly userRepository: UserRepository) {}

  //find
  async find(): Promise<UserResponseDto[]> {
    const users = await this.userRepository.find();
    return UsersMap.toDtoAllUsers(users);
  }

  //findByID
  async findByRegistration(registration: string): Promise<UserResponseDto> {
    const user = await this.userRepository.findByRegistration(registration);
    if (!user)
      throw new NotFoundException(
        `User registration "${registration}" not found`,
      );
    return UsersMap.toDto(user);
  }

  //create
  async create(createUserDto: UserDto): Promise<UserResponseDto> {
    const { registration, password } = createUserDto;
    const userExist = await this.userRepository.findByRegistration(
      registration,
    );
    if (userExist) {
      throw new BadRequestException(
        `User registration ${registration} already exists.`,
      );
    }
    const password_hash = await hash(password, 8);
    const user = this.userRepository.create({
      ...createUserDto,
      password: password_hash,
    });
    await this.userRepository.save(user);
    return UsersMap.toDto(user);
  }

  //update
  async update(id: string, updateUserDto: UserDto): Promise<UserResponseDto> {
    await this.findByRegistration(updateUserDto.registration);
    const user = await this.userRepository.preload({
      id,
      ...updateUserDto,
      updated_at: new Date(),
    });
    await this.userRepository.save(user);
    return UsersMap.toDto(user);
  }
}
