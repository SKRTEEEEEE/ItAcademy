const  filterFilesByExtension  = require('./6modulo');

const folderPath: string = process.argv[2];
const extension: string = process.argv[3];

if (!folderPath || !extension) {
    console.error('Usage: node index.js <folderPath> <extension>');
    process.exit(1);
}

filterFilesByExtension(folderPath, extension, (err: Error | null, files?: string[]) => {
    if (err) {
        console.error(`Error reading directory: ${err.message}`);
        process.exit(1);
    }
    (files || []).forEach(file => {
        console.log(file);
    });
});