import internal from 'stream';
import  {Entity, PrimaryGeneratedColumn, Column, BaseEntity, Timestamp, ManyToMany,}  from 'typeorm';
import { Events } from './Events.entity';

@Entity()
export class Registrations extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    user_id: number;

    @Column()
    event_id: number;

   
}