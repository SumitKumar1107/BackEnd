const numbers = [10,20,30,40];
const months = new Array('Jan','Feb','Mar','Apr');

console.log(months);
console.log(months.length);

months.splice(2,1,'a new month','howdy'); //splice(position to be removed,how many element to be removed, new item to add)
console.log(months);

numbers.sort();

console.log(numbers);

//greater to lower
numbers.sort(function(number1,number2)
{
  return number2-number1;  
});

console.log(numbers);