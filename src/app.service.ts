import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Visit https://github.com/PhilippMeissner/karen-bot for more information.';
  }
}
