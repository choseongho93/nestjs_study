import { PrimaryGeneratedColumn, Column, PrimaryColumn, Entity } from 'typeorm';

type UserRole = 'client' | 'owner' | 'delivery';

@Entity()
export class User {

  @PrimaryGeneratedColumn('rowid')
  id: number;

  @PrimaryColumn()
  userId: string;

  @Column()
  userName: string;

  @Column()
  userPassword: string;

  @Column()
  age: number;

  @Column({ default: true })
  isActive: boolean;

}