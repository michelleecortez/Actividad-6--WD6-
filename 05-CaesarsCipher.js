'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'caesarCipher' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. STRING s
 *  2. INTEGER k
 */

function caesarCipher(s, k) {
    
    let original = "abcdefghijklmnopqrstuvwxyz"

    k = k % 26
    
    let rotated = original.substring(k, original.length) + original.substring(0,k)
    
    let encrypt = ""
    let index = -1
    let indexMayus = -1
    
    for(let item of s){
        index = original.indexOf(item)
        indexMayus = original.indexOf(item.toLowerCase())
        console.log(item)
        if(index === -1 && indexMayus === -1)
            encrypt += item
        else if(index != -1)
            encrypt += rotated[index]
        else
            encrypt += rotated[indexMayus].toUpperCase()
    }
    
    return encrypt
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    const s = readLine();

    const k = parseInt(readLine().trim(), 10);

    const result = caesarCipher(s, k);

    ws.write(result + '\n');

    ws.end();
}
