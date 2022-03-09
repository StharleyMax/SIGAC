import { ClientResponseDto } from '../dto/client-response.dto';

export class ClientsMap {
  static allToDto(clientDto: ClientResponseDto[]) {
    return clientDto.map((dto) => this.toDto(dto));
  }

  static toDto(clientDto: ClientResponseDto): ClientResponseDto | undefined {
    if (!clientDto) return undefined;
    const { id, address, gpon, tellphone1, tellphone2, voip } = clientDto;
    return {
      id,
      address,
      gpon,
      tellphone1,
      tellphone2,
      voip,
    };
  }
}
