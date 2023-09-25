import * as readline from 'node:readline/promises';
import { constrainedMemory, stdin as input, stdout as output } from 'node:process';

import getUserName from './src/getUserName.js';
import { homedir } from 'node:os';

let name = getUserName();
let dir = process.cwd();
process.chdir(homedir());
console.log(dir)
console.log(process.cwd())
// console.log(`Welcome to the File Manager, ${name}! \n`)
// const rl = readline.createInterface({ input, output });
// rl.on('line', (input) => {
//     console.log(homedir())
//     console.log(dir);
//   });



// const answer = await rl.question('What do you think of Node.js? ');

// console.log(`Thank you for your valuable feedback: ${answer}`);

// rl.close();