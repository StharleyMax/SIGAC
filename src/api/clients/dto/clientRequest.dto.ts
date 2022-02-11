import { IClientDto } from '../interfaces/client.interface';
import { ClientDto } from './client.dto';

export class ClientRequestDto extends ClientDto implements IClientDto {}
