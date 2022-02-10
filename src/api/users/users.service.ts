import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { hash } from 'bcrypt';
import { User } from 'src/database/entities/users.entity';
import { Repository } from 'typeorm';

import { UserRequestDto } from './dto/userRequest.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  //find
  async find(): Promise<User[]> {
    return this.userRepository.find();
  }

  //findByID
  async findById(id: string): Promise<User> {
    return this.userRepository.findOne({ id });
  }

  //create
  async create(createUserDto: UserRequestDto): Promise<User> {
    const { registration, password } = createUserDto;

    const userExist = await this.userRepository.findOne({ registration });

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

    return this.userRepository.save(user);
  }

  //update
  async update(id: string, updateUserDto: UserRequestDto): Promise<User> {
    const existUser = await this.userRepository.findOne({ id });

    if (!existUser) {
      throw new NotFoundException(`User ID ${id} not found`);
    }

    const user = await this.userRepository.preload({
      id,
      ...updateUserDto,
      updated_at: new Date(),
    });

    return this.userRepository.save(user);
  }

  //delete
  async remove(id: string) {
    const existUser = await this.userRepository.find({ id });

    if (!existUser) {
      throw new NotFoundException(`User ID ${id} not found`);
    }

    return this.userRepository.remove(existUser);
  }
}
