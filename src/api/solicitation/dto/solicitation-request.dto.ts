import { ClientResponseDto } from 'src/api/clients/dto/clientResponse.dto';

import { SolicitationDto } from './solicitation.dto';

export class SolicitationRequestDto extends SolicitationDto {
  client?: ClientResponseDto; //reference FK id_client(is UUID)
  user?: any; //reference FK id_user(is UUID)
}
