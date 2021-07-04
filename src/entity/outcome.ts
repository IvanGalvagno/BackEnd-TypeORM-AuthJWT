import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'

@Entity()
export class Outcome{
    
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    description: string;

    @Column("real")
    Price: number;

    @Column()
    forPayment: boolean;

    @Column()
    amountOfPayments: number;

    @CreateDateColumn()
    createAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;


}