import { Controller, Get, Param, Post, Body, Put, Delete } from '@nestjs/common';
import { DespesaFixaService } from './despesa-fixa.service';
import { DespesaFixa } from './despesa-fixa.entity';
import { UpdateResult, DeleteResult } from 'typeorm';

@Controller('despesa-fixa')
export class DespesaFixaController {
    constructor(
        private despesaFixService: DespesaFixaService
    ) { }

    @Get(':id')
    async findOne(@Param('id') id): Promise<DespesaFixa> {
        return await this.despesaFixService.findOne(id);
    }

    @Get('/user/:userId')
    async findByUser(@Param('userId') userId): Promise<DespesaFixa[]> {
        return await this.despesaFixService.findByUser(userId);
    }

    @Post()
    async create(@Body() despesaFixData: DespesaFixa): Promise<any> {
        console.log(despesaFixData.pago);
        return await this.despesaFixService.create(despesaFixData);
    }

    @Put(':id')
    async update(@Param('id') id, @Body() despesaFixData: DespesaFixa): Promise<UpdateResult> {
        despesaFixData.id = id;
        console.log(despesaFixData.pago);
        return await this.despesaFixService.update(despesaFixData);
    }

    @Delete(':id')
    async delete(@Param('id') id): Promise<DeleteResult> {
        return await this.despesaFixService.delete(id);
    }

}
