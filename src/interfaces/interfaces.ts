export interface iFileSystem {
    readFile (filename: string): void,
    writeFile (filename: string, content: string): void,
    deleteFile (filename: string): void 
}

export interface iCommand {
    execute(): void
}