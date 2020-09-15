import { Controller, Get, Req } from '@nestjs/common';
import { Request } from 'express';
import { StringManipulationService } from '../string-manipulation/string-manipulation.service';

type failedResponse = string;

interface SuccessResponse {
  response_type: string;
  text: string
}

@Controller('mutate')
export class MutateController {
  constructor(
    private readonly _stringManipulation: StringManipulationService,
  ) {
  }

  @Get()
  karenize(@Req() request: Request): SuccessResponse | failedResponse {
    const sentence = request.query['text'] as string | undefined;
    if (!sentence) return 'yOu NeEd tO pAsS sOmE dAtA';

    return {
      'response_type': 'in_channel',
      text: this._stringManipulation.karenize(sentence),
    };
  }
}
