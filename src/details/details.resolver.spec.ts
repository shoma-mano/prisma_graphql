import { Test, TestingModule } from '@nestjs/testing';
import { DetailsResolver } from './details.resolver';
import { DetailService } from './detail.service';

describe('DetailsResolver', () => {
  let resolver: DetailsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DetailsResolver, DetailService],
    }).compile();

    resolver = module.get<DetailsResolver>(DetailsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
