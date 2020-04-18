import { Controller, Get, Param, Post, Body, Put, Delete } from '@nestjs/common';
import { ReservaService } from './reserva.service';
import { Reserva } from './reserva.entity';
import { UpdateResult, DeleteResult } from 'typeorm';

@Controller('reserva')
export class ReservaController {
    constructor(
        private reservaService: ReservaService
    ){}

    @Get(':id')
    async findOne(@Param('id') id): Promise<Reserva>{
        return await this.reservaService.findOne(id);
    }

    @Get('/user/:userId')
    async findByUser(@Param('userId') userId): Promise<Reserva[]>{
        return await this.reservaService.findByUser(userId);
    }

    @Post()
    async create(@Body() reservaData: Reserva): Promise<Reserva>{
        return await this.reservaService.create(reservaData);
    }

    @Put(':id')
    async update(@Param('id') id, @Body() reservaData: Reserva): Promise<UpdateResult>{
        reservaData.id = id;
        return await this.reservaService.update(reservaData);
    }

    @Delete(':id')
    async delete(@Param('id') id): Promise<DeleteResult>{
        return await this.reservaService.delete(id);
    }
}
