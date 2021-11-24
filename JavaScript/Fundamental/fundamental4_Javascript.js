function hellovisitor(firstname='',lastname='Kumar')
{
    console.log(`hello ${firstname} ${lastname} & welcome to our website`);
}

hellovisitor('sumit','singh');

function addition(number1,number2)
{
    return number1+number2;
}

let result = addition(3,7);

console.log(typeof(result));
console.log(result);

const sum = function addition(number1,number2)
{
    return number1+number2;
}

console.log(sum(2,3));