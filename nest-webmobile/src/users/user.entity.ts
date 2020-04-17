import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Renda } from 'src/renda/renda.entity';

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

    @OneToMany(type => Renda, renda => renda.user)
    rendas: Renda[];
}