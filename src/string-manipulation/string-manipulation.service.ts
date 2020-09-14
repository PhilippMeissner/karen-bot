import { Injectable } from '@nestjs/common';

@Injectable()
export class StringManipulationService {
  karenize(sentence: string) {
    let finishedStr = '';
    let upper = false; // First letter should always be lowercase, because that's how Karens talk.
    for (let i = 0; i < sentence.length; i++) {
      const currChar = sentence.charAt(i);
      finishedStr = `${finishedStr}${upper ? currChar.toUpperCase() : currChar.toLowerCase()}`;
      upper = currChar === ' ' ? upper : !upper; // Do not alternate on whitespace for the ultimate Karen experience
    }

    return finishedStr;
  }
}
