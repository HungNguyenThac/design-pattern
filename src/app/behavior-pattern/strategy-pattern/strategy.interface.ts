export abstract class Strategy {
  constructor() {}
  abstract processFiles(arrayFiles: File[]): void;
}
