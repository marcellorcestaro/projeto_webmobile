import { Test, TestingModule } from '@nestjs/testing';
import { DespesaFixaService } from './despesa-fixa.service';

describe('DespesaFixaService', () => {
  let service: DespesaFixaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DespesaFixaService],
    }).compile();

    service = module.get<DespesaFixaService>(DespesaFixaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
