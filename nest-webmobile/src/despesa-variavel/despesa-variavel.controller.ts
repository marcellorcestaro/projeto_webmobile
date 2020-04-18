import { Controller, Get, Param, Post, Body, Put, Delete } from '@nestjs/common';
import { DespesaVariavelService } from './despesa-variavel.service';
import { DespesaVariavel } from './despesa-variavel.entity';
import { identity } from 'rxjs';

@Controller('despesa-variavel')
export class DespesaVariavelController {
    constructor(
        private despesaVarService: DespesaVariavelService
    ) { }

    @Get(':id')
    async findOne(@Param('id') id): Promise<DespesaVariavel> {
        return await this.despesaVarService.findOne(id);
    }

    @Get('/user/:userId')
    async findByUser(@Param('userId') userId): Promise<DespesaVariavel[]>{
        return await this.despesaVarService.findByUser(userId);
    }

    @Post()
    async create(@Body() despesaVarData: DespesaVariavel): Promise<any>{
        return await this.despesaVarService.create(despesaVarData);
    }

    @Put(':id')
    async update(@Param('id') id, @Body() despesaVarData: DespesaVariavel): Promise<any>{
        despesaVarData.id = id;
        return await this.despesaVarService.update(despesaVarData);
    }

    @Delete(':id')
    async delete(@Param('id') id): Promise<any>{
        return await this.despesaVarService.delete(id);
    }
}
