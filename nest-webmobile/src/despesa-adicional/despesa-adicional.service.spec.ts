import { Test, TestingModule } from '@nestjs/testing';
import { DespesaAdicionalService } from './despesa-adicional.service';

describe('DespesaAdicionalService', () => {
  let service: DespesaAdicionalService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DespesaAdicionalService],
    }).compile();

    service = module.get<DespesaAdicionalService>(DespesaAdicionalService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
