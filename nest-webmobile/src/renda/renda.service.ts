import { Injectable, Body } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Renda } from './renda.entity';
import { Repository, UpdateResult, DeleteResult } from 'typeorm';

@Injectable()
export class RendaService {
    constructor(
        @InjectRepository(Renda)
        private rendaRepository: Repository<Renda>
    ) { }
    
    async findOne(receivedId): Promise<Renda> {
        return await this.rendaRepository.findOne(receivedId);
    }

    async findByUser(userId): Promise<Renda[]> {
        return await this.rendaRepository.find({ user: userId});
    }

    async create(rendaData: Renda): Promise<Renda> {
        return await this.rendaRepository.save(rendaData);
    }

    async update(rendaData: Renda): Promise<UpdateResult> {
        return await this.rendaRepository.update(rendaData.id, rendaData);
    }

    async delete(receivedId): Promise<DeleteResult> {
        return await this.rendaRepository.delete(receivedId);
    }
}
