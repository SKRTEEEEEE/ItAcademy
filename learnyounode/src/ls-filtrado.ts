import fs from "fs";

const folderPath: string = process.argv[2];
const type: string = process.argv[3];
fs.readdir(folderPath, (err: NodeJS.ErrnoException | null, files: string[]) => {
    if (err) {
        console.error(`Error reading directory: ${err.message}`);
        process.exit(1);
    }
    const filteredFiles: string[] = files.filter(file => file.endsWith(`.${type}`));
    filteredFiles.forEach((file) => {
        console.log(file);
    });
});