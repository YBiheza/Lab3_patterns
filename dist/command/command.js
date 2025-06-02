export class ReadFileCommand {
    constructor(fs, filename) {
        this.fs = fs;
        this.filename = filename;
    }
    execute() {
        this.fs.readFile(this.filename);
    }
}
export class WriteFileCommand {
    constructor(fs, filename, content) {
        this.fs = fs;
        this.filename = filename;
        this.content = content;
    }
    execute() {
        this.fs.writeFile(this.filename, this.content);
    }
}
export class DeleteFileCommand {
    constructor(fs, filename) {
        this.fs = fs;
        this.filename = filename;
    }
    execute() {
        this.fs.deleteFile(this.filename);
    }
}
