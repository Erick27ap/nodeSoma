let   readlineSync = require('readline-sync');

// let n1 = 0;
// let n2 = 0;
// let n3 = 0;
// let n4 = 0;
// let total = 0;

// console.log(`programa para somar 4 numeros`);
// n1 = parseFloat(readlineSync.question('Informe o n1:  '));
// n2 = parseFloat(readlineSync.question('Informe o n2:  '));
// n3 = parseFloat(readlineSync.question('Informe o n3:  '));
// n4 = parseFloat(readlineSync.question('Informe o n4:  '));

// let n = 0;
// let total = 0;

// console.log(`programa para somar 4 numeros`);
// n = parseFloat(readlineSync.question('informe o numero:  '));
// total += n;
// n = parseFloat(readlineSync.question('informe o numero:  '));
// total += n;
// n = parseFloat(readlineSync.question('informe o numero:  '));
// total += n;
// n = parseFloat(readlineSync.question('informe o numero:  '));
// total += n;

// // total = n1 + n2 + n3 + n4;
// console.log(`total é = ${total}`);
let n = 1;
let total = 0;

console.log('Somando 10 nmeros');
// for(let i = 1; i <=10; i++)
let i = 1;
while(n!=0)
{
    n = parseFloat(readlineSync.question(`informe o ${i} numero: `));
    total = total + n;
    i++;
}

console.log(`total = ${total}`);