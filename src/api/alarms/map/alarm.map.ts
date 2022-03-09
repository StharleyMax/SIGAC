import { Alarm } from 'src/database/entities/alarm.entity';

import { AlarmResponseDto } from '../dto/alarm-response.dto';

export class AlarmAllMap {
  static async allToDto(alarms: Alarm[]) {
    return {
      alarms: alarms.map((alarm) => AlarmMap.toDto(alarm)),
    };
  }
}

export class AlarmMap {
  static async toDto(alarm: Alarm): Promise<AlarmResponseDto> {
    if (!alarm) return undefined;
    console.log('toDto: ', alarm);
    return {
      id: alarm.id,
      type: alarm.type,
      galc: alarm.galc,
      slot: alarm.slot,
      port: alarm.port,
      onu: alarm.onu,
      client: {
        gpon: alarm.client.gpon,
        address: alarm.client.address,
      },
      answer: alarm.answer
        ? alarm.answer.map((answer) => {
            return {
              createdAt: answer.createdAt,
              description: answer.description,
            };
          })
        : [],
    };
  }
}
