export class FileSystem {
    readFile(fileName) {
        console.log(`Читаемый файл: ${fileName}`);
    }
    writeFile(fileName, content) {
        console.log(`Редактируемый файл: ${fileName}, новая запись: ${content}`);
    }
    deleteFile(filename) {
        console.log(`Удаление файла: ${filename}`);
    }
}
