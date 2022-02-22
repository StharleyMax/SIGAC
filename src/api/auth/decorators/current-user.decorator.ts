import { createParamDecorator, ExecutionContext } from '@nestjs/common';

import { User } from '../../../database/entities/users.entity';

export const CurrentUser = createParamDecorator(
  (data: unknown, context: ExecutionContext): User => {
    const request = context.switchToHttp().getRequest();

    return request.user;
  },
);
