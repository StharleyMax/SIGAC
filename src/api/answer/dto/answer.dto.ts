import { AlarmResponseDto } from 'src/api/alarms/dto/alarm-response.dto';
import { SolicitationResponseDto } from 'src/api/solicitation/dto/solicitation-response.dto';

export class AnswerDto {
  id?: string;
  alarm?: AlarmResponseDto;
  solicitation?: SolicitationResponseDto;
  description: string;
  status: boolean;
  createdAt: Date;
  updatedAt: Date;
}
