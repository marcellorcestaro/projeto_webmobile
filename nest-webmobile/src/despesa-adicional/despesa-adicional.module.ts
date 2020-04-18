import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DespesaAdicional } from './despesa-adicional.entity';
import { DespesaAdicionalController } from './despesa-adicional.controller';
import { DespesaAdicionalService } from './despesa-adicional.service';

@Module({
    imports:[
        TypeOrmModule.forFeature([DespesaAdicional]),
    ],
    controllers: [DespesaAdicionalController],
    providers: [DespesaAdicionalService]
})
export class DespesaAdicionalModule {}
