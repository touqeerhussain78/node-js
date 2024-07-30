import { table } from 'console';
import { Entity, PrimaryGeneratedColumn, Column, Timestamp, CreateDateColumn } from 'typeorm';

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

  @Column()
  status: boolean;

  @Column()
  file: string;

 @CreateDateColumn({ type: 'timestamp' })
  created_at!: Date;

  constructor(id: number, name: string, email: string, phone: string, location: string, status: boolean, file: string, created_at: Date) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.phone = phone;
    this.location = location;
    this.status = status;
    this.file = file;
    this.created_at = created_at;
  }
}
