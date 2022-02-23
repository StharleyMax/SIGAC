import { UserResponseDto } from '../dto/userResponse.dto';

export class UsersMap {
  public static toDtoAllUsers(userDto: UserResponseDto[]) {
    return userDto.map((user) => this.toDto(user));
  }

  public static toDto(userDto: UserResponseDto) {
    if (!userDto) return undefined;
    return {
      id: userDto.id,
      registration: userDto.registration,
      tellphone: userDto.tellphone,
    };
  }
}
