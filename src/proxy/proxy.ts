import { iFileSystem } from "../interfaces/interfaces.js";
import { RealFileSystem } from "../implementation/FileSystem.js";

export class FileSystemProxy implements iFileSystem {
    private realFileSystem: RealFileSystem
    private accessLevel: string;

    constructor (accessLevel: string) {
        this.realFileSystem = new RealFileSystem();
        this.accessLevel = accessLevel
    }

    private hasAccess (operation: string): boolean {
        const permissions: Record<string, string[]> = {
            admin: ['read', 'write', 'delete'],
            user: ['read', 'write'],
            guest: ['read'],
        };
    return permissions[this.accessLevel]?.includes(operation) ?? false;
    }

    readFile(filename: string) : void {
        if(this.hasAccess('read')) {
            this.realFileSystem.readFile(filename);
        } else {
            console.log('Нет доступа')
        }
    }

    writeFile(filename: string, content: string): void {
        if(this.hasAccess('write')) {
            this.realFileSystem.writeFile(filename, content);
        } else {
            console.log('Нет доступа')
        }
    }

    deleteFile(filename: string): void {
        if(this.hasAccess('delete')) {
            this.realFileSystem.deleteFile(filename);
        } else {
            console.log('Нет доступа')
        }
    }
}