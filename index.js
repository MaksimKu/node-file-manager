import * as readline from 'node:readline/promises';
import { constrainedMemory, cwd, stdin as input, stdout as output } from 'node:process';

import getUserName from './src/getUserName.js';
import { homedir } from 'node:os';
import getPathUp from './src/getPathUp.js';
import showListTable from './src/showListTable.js';

let name = getUserName();
let dir = process.cwd();
process.chdir(homedir());
let currentWorkDirectory = process.cwd();
console.log(`Welcome to the File Manager, ${name}! \n`);
console.log(`You are currently in ${currentWorkDirectory}`);


const rl = readline.createInterface({ input, output });

rl.on('close', ()=>console.log(`\n Thank you for using File Manager, ${name}, goodbye! \n`));

rl.on('line', async (input) => {
    let inputArr = input.trim().split(' ');
    inputArr.filter(item => item != '');
    console.log(inputArr)
    if (inputArr.length === 1) {
        switch (inputArr[0]) {
            case 'up':
                process.chdir(getPathUp(currentWorkDirectory));
                currentWorkDirectory = process.cwd();
                break;
            case '.exit':
                rl.close();
            case 'ls':
                try {
                    console.log('currentWorkDirectory', currentWorkDirectory);
                    await showListTable(currentWorkDirectory);
                } catch { console.log('Operation failed'); }
                break;
            default:
            console.log('Invalid input');
        }
        console.log(`\n You are currently in ${currentWorkDirectory} \n`);
    }
  });



// const answer = await rl.question('What do you think of Node.js? ');

// console.log(`Thank you for your valuable feedback: ${answer}`);

// rl.close();