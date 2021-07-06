import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'
import { BaseInfo } from './baseInfo';

@Entity()
export class TypeOfPayment extends BaseInfo{

    @Column()
    name: string;
}