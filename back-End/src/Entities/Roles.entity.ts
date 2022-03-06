import { UseFilters } from '@nestjs/common';
import internal from 'stream';
import  {Entity, PrimaryGeneratedColumn, Column, BaseEntity, Timestamp, OneToOne, JoinColumn,}  from 'typeorm';
import { Users } from './Users.entity';

@Entity()
export class Roles extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    label: string;

    @OneToOne(()=> Users,user =>user.roles,{onDelete: "CASCADE"})
    @JoinColumn()
    user:Users;

}