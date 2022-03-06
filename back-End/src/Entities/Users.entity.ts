import internal from 'stream';
import  {Entity, PrimaryGeneratedColumn, Column, BaseEntity, Timestamp, OneToOne, JoinColumn, OneToMany,}  from 'typeorm';
import { Events } from './Events.entity';
import { Roles } from './Roles.entity';

@Entity()
export class Users extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    first_Name: string;

    @Column()
    last_Name: string;

    @Column()
    userName: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @Column()
    date_of_birth: number;


    @OneToOne(()=> Roles)
    @JoinColumn()
    roles : Roles;


    @Column()
    created_at: Timestamp;

    @Column()
    is_active: boolean;

   


}