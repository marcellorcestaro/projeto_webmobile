import { Test, TestingModule } from '@nestjs/testing';
import { DespesaVariavelService } from './despesa-variavel.service';

describe('DespesaVariavelService', () => {
  let service: DespesaVariavelService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DespesaVariavelService],
    }).compile();

    service = module.get<DespesaVariavelService>(DespesaVariavelService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
