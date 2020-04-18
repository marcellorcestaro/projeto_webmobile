import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DespesaAdicional } from './despesa-adicional.entity';
import { Repository, UpdateResult, DeleteResult } from 'typeorm';

@Injectable()
export class DespesaAdicionalService {
    constructor(
        @InjectRepository(DespesaAdicional)
        private despesaAddRepository: Repository<DespesaAdicional>
    ){ }

    async findOne(receivedId): Promise<DespesaAdicional>{
        return await this.despesaAddRepository.findOne(receivedId);
    }

    async findByUser(userId): Promise<DespesaAdicional[]>{
        return await this.despesaAddRepository.find({ user: userId});
    }

    async create(despesaAddData: DespesaAdicional): Promise<DespesaAdicional>{
        return await this.despesaAddRepository.save(despesaAddData);
    }

    async update(despesaAddData: DespesaAdicional): Promise<UpdateResult>{
        return await this.despesaAddRepository.update(despesaAddData.id, despesaAddData);
    }

    async delete(receivedId): Promise<DeleteResult>{
        return await this.despesaAddRepository.delete(receivedId);
    }
}
