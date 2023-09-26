import * as readline from 'node:readline/promises';
import { constrainedMemory, stdin as input, stdout as output } from 'node:process';

import getUserName from './src/getUserName.js';
import { homedir } from 'node:os';

let name = getUserName();
let dir = process.cwd();
process.chdir(homedir());
let currentWorkDirectory = process.cwd();
console.log(`Welcome to the File Manager, ${name}! \n`);
console.log(`You are currently in ${currentWorkDirectory}`);


const rl = readline.createInterface({ input, output });

rl.on('close', ()=>console.log(`\n Thank you for using File Manager, ${name}, goodbye! \n`));

// rl.on('line', (input) => {
//     console.log(homedir())
//     console.log(dir);
//   });



// const answer = await rl.question('What do you think of Node.js? ');

// console.log(`Thank you for your valuable feedback: ${answer}`);

// rl.close();