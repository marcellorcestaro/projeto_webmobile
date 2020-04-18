import { Module } from '@nestjs/common';
import { DespesaVariavelController } from './despesa-variavel.controller';
import { DespesaVariavelService } from './despesa-variavel.service';
import { TypeOrmModule } from '@nestjs/typeorm'
import { DespesaVariavel } from './despesa-variavel.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([DespesaVariavel]),
  ],
  controllers: [DespesaVariavelController],
  providers: [DespesaVariavelService]
})
export class DespesaVariavelModule {}
