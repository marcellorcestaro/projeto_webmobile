import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nome: string;

    @Column()
    sobrenome: string;

    @Column()
    idade: number;

    @Column({
        type: "float"
    })
    rendaMensal;

    @Column({
        type: "float"
    })
    saldoAtual;

}