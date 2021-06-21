import { Column, CreateDateColumn, Entity, Index, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import Crypto from "../helpers/Crypto";

@Entity('user')
export default class User {

  @PrimaryGeneratedColumn('increment')
  id: number;

  @Index()
  @Column({
    type: 'varchar',
    unique: true
  })
  username: string;

  @Column({
    type: 'varchar',
    transformer: Crypto
  })
  password: string;

  @CreateDateColumn()
  createAT: Date;

  @UpdateDateColumn()
  updatedAT: Date;
}