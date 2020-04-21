import { Module } from '@nestjs/common';
import { DespesaFixaService } from './despesa-fixa.service';
import { DespesaFixaController } from './despesa-fixa.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DespesaFixa } from './despesa-fixa.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([DespesaFixa]),
  ],
  providers: [DespesaFixaService],
  controllers: [DespesaFixaController]
})
export class DespesaFixaModule {}
