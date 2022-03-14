//Homework-3
//1
arr = [1,12,4]
function a(){
var length = 0;
while(arr[length]!==undefined) {
length++;
}
return length;
}

//N2
const sum = [1, 12, 4].reduce(add, 0); 
function add(accumulator, a) {
  return accumulator + a;
}
console.log(sum);

//N3


//N4
var num=window.prompt();
var str = num.toString();
var result = [str[0]];
  
for(var x=1; x<str.length; x++)
  {
    if((str[x-1]%2 === 0)&&(str[x]%2 === 0))
     {
      result.push('-', str[x]);
     }
    else
     {
      result.push(str[x]);
     }
  }
console.log(result.join(''))

//N5
const lowerNumber = parseInt(prompt('Enter lower number: '));
const higherNumber = parseInt(prompt('Enter higher number: '));

console.log(`The prime numbers between ${lowerNumber} and ${higherNumber} are:`);
for (let i = lowerNumber; i <= higherNumber; i++) {
    let flag = 0;
    for (let j = 2; j < i; j++) {
        if (i % j == 0) {
            flag = 1;
            break;
        }
    }
    if (i > 1 && flag == 0) {
        console.log(i);
    }
}