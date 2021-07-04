import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'
import { BaseInfo } from "./baseInfo";
import { TypeOfPayment } from './typeOfPayment';

@Entity()
export class Outcome extends BaseInfo{
    
    @Column()
    description: string;

    @Column("real")
    Price: number;

    @OneToOne(type  => TypeOfPayment)
    @JoinColumn({name : "typeofpayment_id"})
    TypeOfPayment: TypeOfPayment;
    
    @Column()
    forPayment: boolean;

    @Column({
        default: 1
    })
    amountOfPayments: number;

    @Column({default : false})
    isPayed: boolean;

}