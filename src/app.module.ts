import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MutateController } from './mutate/mutate.controller';
import { StringManipulationService } from './string-manipulation/string-manipulation.service';

@Module({
  imports: [],
  controllers: [AppController, MutateController],
  providers: [AppService, StringManipulationService],
})
export class AppModule {}
