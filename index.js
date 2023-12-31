import * as readline from 'node:readline/promises';
import { constrainedMemory, cwd, stdin as input, stdout as output } from 'node:process';
import { homedir, EOL, userInfo } from 'node:os';

import getUserName from './src/getUserName.js';
import getPathUp from './src/getPathUp.js';
import showListTable from './src/showListTable.js';
import goFolderPatch from './src/goFolderPatch.js';
import readAndPrintFile from './src/readAndPrintFile.js';
import createEmptyFile from './src/createEmptyFile.js';
import deleteFile from './src/deleteFile.js';
import showCpus from './src/showCpus.js';
import calculateHash from './src/calculateHash.js';
import renameFile from './src/RenameFile.js';
import copyFile from './src/copyFile.js';

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
    // console.log(inputArr)
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
        if (input != '.exit') {
        console.log(`\n You are currently in ${currentWorkDirectory} \n`);
        }
    } else if (inputArr.length === 2) {
        switch (inputArr[0]) {
            case 'cd':
                currentWorkDirectory = goFolderPatch(currentWorkDirectory, inputArr[1]);
            break;
            case 'cat': ;
            try {
                await readAndPrintFile(inputArr[1]);
            } catch {
                console.log('Operation failed');
            }
            break;
            case 'add':
                try {
                  await createEmptyFile(currentWorkDirectory, inputArr[1]);
                } catch {
                  console.log('Operation failed');
                }
            break;
            case 'rm':
                try {
                    await deleteFile(inputArr[1]);
                } catch {
                    console.log("Operation failed")
                }
                break;
            case'os':
                switch (inputArr[1]) {
                    case '--EOL':
                        console.log('EOL:', EOL)
                        break;
                    case '--cpus':
                        showCpus();
                        break;
                    case '--homedir':
                        console.log(homedir());
                        break;
                    case '--username':
                        console.log(userInfo().username);
                        break;
                    case '--architecture':
                        console.log(process.arch);
                        break;
                    default:
                        console.log('Invalid input');
                };
            case 'hash':
                try {
                    await calculateHash(inputArr[1]);
                  } catch (err){
                    console.log(err);
                  }
                break;
            default:
                console.log('Invalid input');
        }
        console.log(`\n You are currently in ${currentWorkDirectory} \n`)
    } else if (inputArr.length === 3) {
        switch (inputArr[0]) {
            case 'rn':
                try {
                    await renameFile(inputArr[1], inputArr[2])
                } catch(err) {
                    console.log(err)
                }
            break;
            case 'cp':
                try {
                    await copyFile(inputArr[1], inputArr[2])
                } catch {
                    console.log('Operation failed')
                }
            break;
            case 'mv':
                try {
                    await copyFile(inputArr[1], inputArr[2]);
                    await deleteFile(inputArr[1])
                } catch {
                    console.log('Operation failed')
                }
            break;
            case 'compress':
                try {
                    await compress(inputArr[1], inputArr[2]);
                  } catch {
                    console.log('Operation failed');
                  }
            break;
            case 'decompress':
                try {
                    await decompress(inputArr[1], inputArr[2]);
                  } catch {
                    console.log('Operation failed');
                  }
            break;
        }
    }
  });



// const answer = await rl.question('What do you think of Node.js? ');

// console.log(`Thank you for your valuable feedback: ${answer}`);

// rl.close();