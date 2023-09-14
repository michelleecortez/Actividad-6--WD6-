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
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function timeConversion(s) {
    let horas = Number(s.substring(0,2));
    let letras = s.substring(8);
    
    if(letras === "PM"){
        if(horas !== 12){
            horas = horas +12
        }
    }
    else{
        if(horas === 12){
            horas = 0;
        }
    }
    
    if(horas < 10){
        horas = "0" + horas;
    }
    
    return horas + s.substring(2,8);

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const result = timeConversion(s);

    ws.write(result + '\n');

    ws.end();
}