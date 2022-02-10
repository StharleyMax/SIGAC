import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('clients')
export class Client {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  gpon: string;

  @Column()
  address: string;

  @Column()
  voip: string;

  @Column()
  tellphone1: string;

  @Column()
  tellphone2: string;
}
