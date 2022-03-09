import { Solicitation } from '../../../database/entities/solicitation.entity';
import { SolicitationResponseDto } from '../dto/solicitation-response.dto';

export class SolicitationMap {
  static allToDto(solicitations: Solicitation[]) {
    return {
      solicitations: solicitations.map((solicitation) =>
        this.toDto(solicitation),
      ),
    };
  }

  static toDto(
    solicitation: Solicitation,
  ): SolicitationResponseDto | undefined {
    if (!solicitation) return undefined;
    return {
      id: solicitation.id,
      complaint: solicitation.complaint,
      description: solicitation.description,
      user: {
        registration: solicitation.user.registration,
      },
      client: {
        gpon: solicitation.client.gpon,
        address: solicitation.client.address,
      },
      createdAt: solicitation.createdAt,
      answer: solicitation.answer
        ? solicitation.answer.map((answer) => {
            return {
              createdAt: answer.createdAt,
              description: answer.description,
            };
          })
        : [],
    };
  }
}
