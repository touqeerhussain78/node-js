import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

@Entity('attachments')
export class UploadedFile {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  filename: string;

  @Column()
  path: string;

  @Column()
  mimetype: string;

  @Column()
    size: number;
    
    @CreateDateColumn({ type: 'timestamp' })
  created_at!: Date;

  constructor(id: number, filename: string, path: string, mimetype: string, size: number, created_at: Date) {
    this.id = id;
    this.filename = filename;
    this.path = path;
    this.mimetype = mimetype;
    this.size = size;
    this.created_at = created_at;
  }
}
