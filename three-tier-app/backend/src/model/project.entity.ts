import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Project {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  team: string;

  @Column()
  client: string;

  @Column()
  project: string;

  @Column()
  core: string;

  @Column()
  golivedate: Date
}