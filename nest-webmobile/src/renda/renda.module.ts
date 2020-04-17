import { Module } from '@nestjs/common';
import { RendaController } from './renda.controller';
import { RendaService } from './renda.service';
import { Renda } from './renda.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forFeature([Renda]),
  ],
  controllers: [RendaController],
  providers: [RendaService]
})
export class RendaModule {}
