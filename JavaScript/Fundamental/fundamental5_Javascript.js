const score = 100;

if(score==='100')
{
    console.log('yes, they\'re the same ');
}
else
{
    console.log('no, they\'re different');
}

const loggedin = true;

console.log(loggedin === true?'the user is logged in':'not logged in , please log in');


const cars = ['camaro','mustang','challenger']

const selected = 1;
let car;

switch(selected) //condition
{
    case 0:
        car = cars[0];
        break;
        
    case 1:
        car = cars[1];
        break;
        
    case 2:
        car = cars[2];
        break;
}

console.log(`your selected car is ${car}`);