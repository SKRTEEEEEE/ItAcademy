import fs from "fs";

function filterFilesByExtension(folderPath: string, extension: string, callback:(err: Error | null, filteredFiles?: string[] | null)=> void) {
    fs.readdir(folderPath, (err, files) => {
        if (err) {
            return callback(err, null);
        }
        const filteredFiles = files.filter(file => file.endsWith(`.${extension}`));
        return callback(null, filteredFiles);
    });
}

module.exports =  filterFilesByExtension 