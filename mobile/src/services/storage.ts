import { AsyncStorage } from 'react-native';

class Storage {
  key: string;

  constructor(key: string) {
    this.key = key;
  }

  set(data): Promise<void> {
    try {
      return AsyncStorage.setItem(this.key, data);
    } catch (err) {
      console.error(err);
    }
  }

  get(): Promise<string> {
    try {
      return AsyncStorage.getItem(this.key);
    } catch (err) {
      console.error(err);
    }
  }

  delete(): Promise<void> {
    try {
      return AsyncStorage.removeItem(this.key);
    } catch (err) {
      console.error(err);
    }
  }
}

const sessionStorage = new Storage('SESSION');

export { sessionStorage };
