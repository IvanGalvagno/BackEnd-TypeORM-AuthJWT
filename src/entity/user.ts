import { Column, Entity, PrimaryColumn } from 'typeorm'
import { BaseInfo } from './baseInfo';

@Entity()
export class User extends BaseInfo {
    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    password: string;

    // @Column()
    // birthdate: Date;
}