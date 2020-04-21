import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Reserva } from './reserva.entity';
import { Repository, UpdateResult, DeleteResult } from 'typeorm';

@Injectable()
export class ReservaService {
    constructor(
        @InjectRepository(Reserva)
        private reservaRepository: Repository<Reserva>
    ) { }

    async findOne(receivedId): Promise<Reserva>{
        return await this.reservaRepository.findOne(receivedId);
    }
    
    async findByUser(userId): Promise<Reserva[]>{
        return await this.reservaRepository.find({user: userId});
    }
    
    async create(reservaData: Reserva): Promise<Reserva>{
        return await this.reservaRepository.save(reservaData);
    }

    async update(reservaData: Reserva): Promise<UpdateResult>{
        return await this.reservaRepository.update(reservaData.id, reservaData);
    }

    async delete(receivedId): Promise<DeleteResult>{
        return await this.reservaRepository.delete(receivedId);
    }
}
