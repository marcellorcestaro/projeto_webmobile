import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DespesaFixa } from './despesa-fixa.entity';
import { Repository, UpdateResult, DeleteResult } from 'typeorm';

@Injectable()
export class DespesaFixaService {
    constructor (
        @InjectRepository(DespesaFixa)
        private despesaFixRepository: Repository<DespesaFixa>
    ) { }

    async findOne(receivedId): Promise<DespesaFixa> {
        return await this.despesaFixRepository.findOne(receivedId);
    }

    async findByUser(userId): Promise<DespesaFixa[]> {
        return await this.despesaFixRepository.find({ user: userId});
    }

    async create(despesaFixData: DespesaFixa): Promise<DespesaFixa> {
        return await this.despesaFixRepository.save(despesaFixData);
    }

    async update(despesaFixData: DespesaFixa): Promise<UpdateResult> {
        return await this.despesaFixRepository.update(despesaFixData.id, despesaFixData);
    }

    async delete(receivedId): Promise<DeleteResult> {
        return await this.despesaFixRepository.delete(receivedId);
    }
}
