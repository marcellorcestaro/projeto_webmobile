import { Test, TestingModule } from '@nestjs/testing';
import { DespesaFixaController } from './despesa-fixa.controller';

describe('DespesaFixa Controller', () => {
  let controller: DespesaFixaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DespesaFixaController],
    }).compile();

    controller = module.get<DespesaFixaController>(DespesaFixaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
