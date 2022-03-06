import internal from 'stream';
import  {Entity, PrimaryGeneratedColumn, Column, BaseEntity, Timestamp,}  from 'typeorm';

@Entity()
export class Questions extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    answer: string;

   


}