import { EntityRepository, Repository } from 'typeorm';

import { User } from '../entities/users.entity';

@EntityRepository(User)
export class UserRepository extends Repository<User> {
  async findById(id: string) {
    return this.findOne({ id });
  }

  async findByRegistration(registration: string) {
    return this.findOne({ registration });
  }
}
