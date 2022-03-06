import internal from 'stream';
import  {Entity, PrimaryGeneratedColumn, Column, BaseEntity, Timestamp,}  from 'typeorm';

@Entity()
export class Documents extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    event_id: number;

    @Column()
    title: string;

    @Column()
    path: string;



}