import json from './parser';
import read from './reader';

export default class GameSavingLoader {
  static load() {
    return new Promise((resolve, reject) => {
      (async () => {
        try {
          resolve(JSON.parse(await json(await read())));
        }
        catch(error) {
          reject(error);
        }
      })();
    });
  }
}