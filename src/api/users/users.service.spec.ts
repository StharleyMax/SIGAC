import { Test, TestingModule } from '@nestjs/testing';

import { UserRepository } from '../../database/repositories/user.repository';
import { UsersService } from './users.service';

describe('ProductService', () => {
  let usersService;
  let userRepository;
  const mockUserRepository = () => ({
    create: jest.fn(),
    find: jest.fn(),
    findByRegistration: jest.fn(),
    delete: jest.fn(),
  });

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UsersService,
        {
          provide: UserRepository,
          useFactory: mockUserRepository,
        },
      ],
    }).compile();
    usersService = await module.get<UsersService>(UsersService);
    userRepository = await module.get<UserRepository>(UserRepository);
  });

  describe('getUser', () => {
    it('should get all users', async () => {
      userRepository.find.mockResolvedValue('someUsers');
      expect(userRepository.find).not.toHaveBeenCalled();
      const result = await usersService.find();
      expect(userRepository.find).toHaveBeenCalled();
      expect(result).toEqual('someUsers');
    });
  });
});
