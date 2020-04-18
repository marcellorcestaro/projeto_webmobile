import { Controller, Get, Param, Post, Body, Put, Delete } from '@nestjs/common';
import { DespesaAdicionalService } from './despesa-adicional.service';
import { DespesaAdicional } from './despesa-adicional.entity';


@Controller('despesa-adicional')
export class DespesaAdicionalController {
    constructor(
        private despesaAddService: DespesaAdicionalService
    ) { }

    @Get(':id')
    async findOne(@Param('id') id): Promise<DespesaAdicional> {
        return await this.despesaAddService.findOne(id);
    }

    @Get('/user/:userId')
    async findByUser(@Param('userId') userId): Promise<DespesaAdicional[]>{
        return await this.despesaAddService.findByUser(userId);
    }
  
    @Post()
    async create(@Body() despesaVarData: DespesaAdicional): Promise<any>{
        return await this.despesaAddService.create(despesaVarData);
    }

    @Put(':id')
    async update(@Param('id') id, @Body() despesaVarData: DespesaAdicional): Promise<any>{
        despesaVarData.id = id;
        return await this.despesaAddService.update(despesaVarData);
    }

    @Delete(':id')
    async delete(@Param('id') id): Promise<any>{
        return await this.despesaAddService.delete(id);
    }
}