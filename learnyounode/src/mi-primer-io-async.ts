
import fs from 'fs';

const filePath: string = process.argv[2];
fs.readFile(filePath, 'utf8', (err: NodeJS.ErrnoException | null, data: string) => {
    if (err) {
        console.error(`Error reading file: ${err.message}`);
        process.exit(1);
    }

    const lines = data.split('\n').length - 1;
    console.log(lines);
});
	

    
