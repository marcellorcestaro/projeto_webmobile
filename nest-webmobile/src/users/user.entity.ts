import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Renda } from 'src/renda/renda.entity';
import { DespesaVariavel } from 'src/despesa-variavel/despesa-variavel.entity'
import { DespesaAdicional } from 'src/despesa-adicional/despesa-adicional.entity';
import { Reserva } from 'src/reserva/reserva.entity';
import { DespesaFixa } from 'src/despesa-fixa/despesa-fixa.entity';

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

    @OneToMany(type => DespesaFixa, despesasFix => despesasFix.user)
    despesasFix: DespesaFixa[];
    
    @OneToMany(type => DespesaVariavel, despesasVar => despesasVar.user)
    despesasVar: DespesaVariavel[]; 

    @OneToMany(type => DespesaAdicional, despesasAdd => despesasAdd.user)
    despesasAdd: DespesaAdicional[]; 

    @OneToMany(type => Reserva, reserva => reserva.user)
    reservas: Reserva[];
}