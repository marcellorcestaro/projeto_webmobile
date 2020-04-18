import { Test, TestingModule } from '@nestjs/testing';
import { DespesaVariavelController } from './despesa-variavel.controller';

describe('DespesaVariavel Controller', () => {
  let controller: DespesaVariavelController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DespesaVariavelController],
    }).compile();

    controller = module.get<DespesaVariavelController>(DespesaVariavelController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
