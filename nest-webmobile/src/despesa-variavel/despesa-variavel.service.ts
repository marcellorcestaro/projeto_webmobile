import { Injectable } from '@nestjs/common';
import { DespesaVariavel } from './despesa-variavel.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult, DeleteResult } from 'typeorm';

@Injectable()
export class DespesaVariavelService {
    constructor(
        @InjectRepository(DespesaVariavel)
        private despesaVarRepository: Repository<DespesaVariavel>
    ) { }

    async findOne(receivedId): Promise<DespesaVariavel> {
        return await this.despesaVarRepository.findOne(receivedId);
    }

    async findByUser(userId): Promise<DespesaVariavel[]> {
        return await this.despesaVarRepository.find({ user: userId});
    }

    async create(despesaVarData: DespesaVariavel): Promise<DespesaVariavel> {
        return await this.despesaVarRepository.save(despesaVarData);
    }

    async update(despesaVarData: DespesaVariavel): Promise<UpdateResult> {
        return await this.despesaVarRepository.update(despesaVarData.id, despesaVarData);
    }

    async delete(receivedId): Promise<DeleteResult> {
        return await this.despesaVarRepository.delete(receivedId);
    }
}
