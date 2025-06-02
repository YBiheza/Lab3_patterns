import { iFileSystem } from "../interfaces/interfaces.js";

export class RealFileSystem implements iFileSystem {
    readFile(fileName: string): void {
        console.log(`Читаемый файл: ${fileName}`);
    }

    writeFile(fileName: string, content: string): void {
        console.log(`Редактируемый файл: ${fileName}, новая запись: ${content}`);
    }

    deleteFile(filename: string): void {
        console.log(`Удаление файла: ${filename}`);        
    }
}