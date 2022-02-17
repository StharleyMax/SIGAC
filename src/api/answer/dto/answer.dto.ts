import { AlarmPartialDto } from 'src/api/alarms/dto/alarm-partial.dto';
import { SolicitationResponseDto } from 'src/api/solicitation/dto/solicitation-response.dto';

export class AnswerDto {
  id?: string;
  alarm?: AlarmPartialDto;
  solicitation?: SolicitationResponseDto;
  description: string;
  status: boolean;
  createdAt: Date;
  updatedAt: Date;
}
