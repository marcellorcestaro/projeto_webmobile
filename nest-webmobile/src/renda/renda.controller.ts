import { Controller, Get, Param, Post, Body, Put, Delete } from '@nestjs/common';
import { RendaService } from './renda.service';
import { Renda } from './renda.entity';
import { UpdateResult, DeleteResult } from 'typeorm';

@Controller('renda')
export class RendaController {
    constructor(
        private rendaService: RendaService
    ) { }

    @Get(':id')
    async findOne(@Param('id') id): Promise<Renda> {
        return await this.rendaService.findOne(id);
    }

    @Get('/user/:userId')
    async findByUser(@Param('userId') userId): Promise<Renda[]> {
        return await this.rendaService.findByUser(userId); 
    }

    @Post()
    async create(@Body() rendaData: Renda): Promise<any> {
        return await this.rendaService.create(rendaData);
    }

    @Put(':id')
    async update(@Param('id') id, @Body() rendaData: Renda): Promise<UpdateResult> {
        rendaData.id = id;
        return await this.rendaService.update(rendaData);
    }

    @Delete(':id')
    async delete(@Param('id') id): Promise<DeleteResult> {
        return await this.rendaService.delete(id);
    }
}
