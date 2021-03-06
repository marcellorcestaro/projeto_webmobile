import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { User } from 'src/users/user.entity';

@Entity()
export class DespesaFixa {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(type => User, user => user.despesasVar)
    user: User;

    @Column()
    descricao: string;

    @Column()
    dataVencimento: Date;

    @Column()
    destino: string;

    @Column()
    categoria: string; 

    @Column("float")
    valor;
 
    @Column()
    pago: boolean;

    @Column("float")
    totalPago; 

    @Column("float")
    faltaPagar;

    @Column("float")
    totalPrevisto;
}