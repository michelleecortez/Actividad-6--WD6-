'use strict';

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
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function plusMinus(arr) {
   
        const n = arr.length;
        let Positivos = 0;
        let Negativos = 0;
        let Ceros = 0;
      
        for (let i = 0; i < n; i++) {
          if (arr[i] > 0) {
            Positivos++;
          } else if (arr[i] < 0) {
            Negativos++;
          } else {
            Ceros++;
          }
        }
      
        const rPositivos = Positivos / n;
        const rNegativos = Negativos / n;
        const rCeros = Ceros / n;
      
        console.log(rPositivos.toFixed(6));
        console.log(rNegativos.toFixed(6));
        console.log(rCeros.toFixed(6));
      
    
}

function main() {
    const n = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    plusMinus(arr);
}