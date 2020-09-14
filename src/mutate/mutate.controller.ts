import { Controller, Get, Req } from '@nestjs/common';
import { Request } from 'express';
import { StringManipulationService } from '../string-manipulation/string-manipulation.service';

@Controller('mutate')
export class MutateController {
  constructor(
    private readonly _stringManipulation: StringManipulationService,
  ) {
  }

  @Get()
  karenize(@Req() request: Request): string {
    const sentence = request.query['text'] as string | undefined;
    if (!sentence) return 'yOu NeEd tO pAsS sOmE dAtA';

    return this._stringManipulation.karenize(sentence);
  }
}
