import { table } from 'console';
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('recipients')
export class Recipient {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  phone: string;

  @Column()
  location: string;

  constructor(id: number, name: string, email: string, phone: string, location: string) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.phone = phone;
    this.location = location;
  }
}
