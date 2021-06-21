import { Column, CreateDateColumn, Entity, Index, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";


@Entity('letter')
export default class Letter {
  
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Index()
  @Column({
    type: 'varchar',
  })
  name: string;

  @Column({
    type: "int",
    width: 3
  })
  age: number;
  
  @Column({
    type: 'varchar'
  })
  city: string;

  @Column({
    type: "varchar",
    length: 2
  })
  uf: string;

  @Column({
    type: "varchar"
  })
  behavior: string;

  @Column({
    type: "text"
  })
  do: string

  @Column({
    type: "text"
  })
  gift: string

  @CreateDateColumn()
  createAT: Date;

  @UpdateDateColumn()
  updatedAT: Date;
}