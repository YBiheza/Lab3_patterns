import { FileSystem } from "../implementation/FileSystem.js";
export class FileSystemProxy {
    constructor(accessLevel) {
        this.FileSystem = new FileSystem();
        this.accessLevel = accessLevel;
    }
    hasAccess(operation) {
        const permissions = {
            admin: ['read', 'write', 'delete'],
            user: ['read', 'write'],
            guest: ['read'],
        };
        return permissions[this.accessLevel]?.includes(operation) ?? false;
    }
    readFile(filename) {
        if (this.hasAccess('read')) {
            this.FileSystem.readFile(filename);
        }
        else {
            console.log('Нет доступа');
        }
    }
    writeFile(filename, content) {
        if (this.hasAccess('write')) {
            this.FileSystem.writeFile(filename, content);
        }
        else {
            console.log('Нет доступа');
        }
    }
    deleteFile(filename) {
        if (this.hasAccess('delete')) {
            this.FileSystem.deleteFile(filename);
        }
        else {
            console.log('Нет доступа');
        }
    }
}
