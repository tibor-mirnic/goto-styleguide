import { cpSync } from 'fs';
import { argv, cwd } from 'node:process';
import { join } from 'path';

const assetsPath = argv[2];
if (!assetsPath) {
  throw new Error('Missing destination path!');
}

const currentExecutionPath = cwd();
const scriptPath = argv[1];
const destinationPath = join(currentExecutionPath, assetsPath);
const sourcePath = join(scriptPath, '../../dist/css');

console.log(sourcePath);
console.log(destinationPath);

cpSync(sourcePath, destinationPath, {
  recursive: true
});
