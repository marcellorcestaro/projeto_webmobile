import { Test, TestingModule } from '@nestjs/testing';
import { DespesaAdicionalController } from './despesa-adicional.controller';

describe('DespesaAdicional Controller', () => {
  let controller: DespesaAdicionalController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DespesaAdicionalController],
    }).compile();

    controller = module.get<DespesaAdicionalController>(DespesaAdicionalController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
