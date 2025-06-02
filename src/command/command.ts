import { iCommand } from "../interfaces/interfaces.js";
import { iFileSystem } from "../interfaces/interfaces.js";

export class ReadFileCommand implements iCommand {
    constructor (private fs: iFileSystem, private filename: string) {}

    execute(): void {
        this.fs.readFile(this.filename);
    }
}


export class WriteFileCommand implements iCommand {
  constructor(private fs: iFileSystem, private filename: string, private content: string) {}

  execute(): void {
    this.fs.writeFile(this.filename, this.content);
  }
}

export class DeleteFileCommand implements iCommand {
  constructor(private fs: iFileSystem, private filename: string) {}

  execute(): void {
    this.fs.deleteFile(this.filename);
  }
}