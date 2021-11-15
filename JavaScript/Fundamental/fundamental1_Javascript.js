console.log(typeof(NULL)); //data type of NULL is undefined
console.log(typeof(20));

const learning = 'how i met your mother';

console.log(learning.indexOf('ow')); //return 1  

const sentence = 'howdy i met your mother';

let output = sentence.slice(0,3);
console.log(output);
output = sentence.slice(-7);
output = sentence.split(' ');
console.log(output);

output = sentence.replace('mother','father');
console.log(output);

output = sentence.includes('Mother');
console.log(output);

console.log(2=='2');  //true
console.log(2==='2'); //false strict comparison operator which check typeof 

console.log(null == undefined);  //true
console.log(null === undefined); //false as both have different typeof

//convert array into string
output = String([1,2,3,4])

console.log(output);

//template string or template literals

const prod1  = 'pizza',
      price1 =  20,
      prod2  =  'burger',
      price2 =  30;
      
      
let html;

html = `
            <ul>
            <li>Item: ${prod1}</li>
            <li>Price: ${price1}</li>
            <li>Item: ${prod2}</li>
            <li>Price: ${price2}</li>
            </ul>
       `;
       
//usage of string literals (we can use to print something in html)
let app = document.querySelector('#app');
app.innerHTML = html;