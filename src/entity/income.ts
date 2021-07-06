import { Column, Entity, JoinColumn, OneToOne } from 'typeorm'
import { BaseInfo } from './baseInfo'
import { TypeOfPayment } from './typeOfPayment';

@Entity()
export class Income extends BaseInfo{
    @Column()
    description: string;

    @Column("real")
    value: number;
}