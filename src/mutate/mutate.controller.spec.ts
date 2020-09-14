import { Test, TestingModule } from '@nestjs/testing';
import { MutateController } from './mutate.controller';

describe('MutateController', () => {
  let controller: MutateController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MutateController],
    }).compile();

    controller = module.get<MutateController>(MutateController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
