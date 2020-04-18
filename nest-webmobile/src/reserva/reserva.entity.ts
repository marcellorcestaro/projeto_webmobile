import { Entity, PrimaryGeneratedColumn, ManyToOne, Column } from "typeorm";
import { User } from "src/users/user.entity";

@Entity()
export class Reserva{
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(type => User, user => user.reservas)
    user: User

    @Column()
    descricao: string;

    @Column()
    data: Date;

    @Column()
    destino: string;

    @Column()
    categoria: string;

    @Column("float")
    valor;

    @Column("boolean")
    aplicado;

    @Column("float")
    reservado;

    @Column("float")
    faltaReservar;

    @Column("float")
    totalPrevisto;
}