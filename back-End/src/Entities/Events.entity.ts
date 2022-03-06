import { type } from 'os';
import internal from 'stream';
import  {Entity, PrimaryGeneratedColumn, Column, BaseEntity, Timestamp, ManyToMany, UseContainerOptions, ManyToOne,}  from 'typeorm';
import { Registrations } from './Registrations.entity';
import { Users } from './Users.entity';

@Entity()
export class Events extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    description: string;

    @Column()
    is_open: boolean;

    @Column()
    is_active: boolean;

    @Column()
    places_nb: number;

    @Column()
    admin_id: number;

    @Column()
    category: string;

    @Column()
    date: Date;

    @Column()
    created_at: Date;
     
}