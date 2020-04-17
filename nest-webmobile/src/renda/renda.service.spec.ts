import { Test, TestingModule } from '@nestjs/testing';
import { RendaService } from './renda.service';

describe('RendaService', () => {
  let service: RendaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RendaService],
    }).compile();

    service = module.get<RendaService>(RendaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
