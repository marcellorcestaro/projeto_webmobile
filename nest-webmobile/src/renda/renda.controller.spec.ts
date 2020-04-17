import { Test, TestingModule } from '@nestjs/testing';
import { RendaController } from './renda.controller';

describe('Renda Controller', () => {
  let controller: RendaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RendaController],
    }).compile();

    controller = module.get<RendaController>(RendaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
