import fs from "fs";

if(process.argv.length !== 3){console.log("Usa: node dist/mi-primer-io <file_path>");process.exit(1);}
const filePath: string = process.argv[2];
try{
const data:string = fs.readFileSync(filePath, "utf8")
const lineCount: number = data.split("\n").length - 1;
console.log(lineCount);
} catch (err) {if(err instanceof Error){console.error(`Error reading file: ${err.message}`)}else{console.error("unknow error")}process.exit(1);}


