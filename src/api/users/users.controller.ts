import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import {
  ApiCreatedResponse,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';

import { User } from 'src/database/entities/users.entity';

import { UserRequestDto } from './dto/userRequest.dto';
import { UserResponseDto } from './dto/userResponse.dto';
import { UsersService } from './users.service';

@Controller('users')
@ApiTags('users')
export class UsersController {
  constructor(readonly usersService: UsersService) {}

  @Get()
  @ApiOperation({ summary: 'Find all users' })
  @ApiResponse({
    status: 200,
    description: 'list users',
    type: [UserResponseDto],
  })
  find() {
    return this.usersService.find();
  }

  @Get('/:id')
  @ApiOperation({ summary: 'Find user by id' })
  @ApiResponse({ status: 200, description: 'list user', type: UserResponseDto })
  @ApiResponse({ status: 404, description: 'user not found' })
  findById(@Param('id') id: string) {
    return this.usersService.findById(id);
  }

  @Post()
  @ApiOperation({ summary: 'Create new user' })
  @ApiResponse({
    status: 201,
    description: 'created user',
    type: UserResponseDto,
  })
  @ApiResponse({ status: 400, description: 'Parameter invalid' })
  create(@Body() createUserDto: UserRequestDto) {
    return this.usersService.create(createUserDto);
  }

  @Put('/:id')
  @ApiOperation({ summary: 'Update user' })
  @ApiResponse({
    status: 200,
    description: 'update user success',
    type: UserResponseDto,
  })
  @ApiResponse({ status: 400, description: 'Parameter invalid' })
  @ApiResponse({ status: 404, description: 'user not found' })
  update(@Param('id') id: string, @Body() updateUserDto: UserRequestDto) {
    return this.usersService.update(id, updateUserDto);
  }

  @Delete('/:id')
  @ApiOperation({ summary: 'Delete user' })
  @ApiResponse({ status: 204, description: 'delete user success' })
  @ApiResponse({ status: 404, description: 'user not found' })
  @ApiCreatedResponse({ type: User })
  remove(@Param('id') id: string) {
    return this.usersService.remove(id);
  }
}
