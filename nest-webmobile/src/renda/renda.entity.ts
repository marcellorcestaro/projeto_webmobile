import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { User } from 'src/users/user.entity';

@Entity()
export class Renda {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(type => User, user => user.rendas)
    user: User;

    @Column()
    descricao: string;

    @Column()
    dataRecebimento: Date;

    @Column()
    origem: string;

    @Column()
    categoria: string; 

    @Column("float")
    valor;

    @Column({type: "float"})
    recebido;

    @Column("float")
    faltaReceber; 

    @Column("float")
    totalPrevisto;
}