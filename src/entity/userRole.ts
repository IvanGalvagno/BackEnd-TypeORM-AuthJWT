import { Column, Entity } from 'typeorm'
import { BaseInfo } from './baseInfo';

@Entity()
export class UserRole extends BaseInfo {
    @Column()
    Description: string;
}