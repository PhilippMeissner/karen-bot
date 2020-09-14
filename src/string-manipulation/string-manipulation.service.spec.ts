import { Test, TestingModule } from '@nestjs/testing';
import { StringManipulationService } from './string-manipulation.service';

describe('StringManipulationService', () => {
  let service: StringManipulationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StringManipulationService],
    }).compile();

    service = module.get<StringManipulationService>(StringManipulationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
