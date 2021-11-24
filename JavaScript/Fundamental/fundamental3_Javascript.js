const person = {
    firstname:'Sumit',
    lastname:'Kumar',
    age:21,
    favouritesport : ['football','basketball'],
    living:{
        city:'Hubli',
        country:'India'
    },
    bornYear: function(){
        return new Date().getFullYear()-this.age;
    }
}

console.log(person.age);
console.log(person.favouritesport[0]);
console.log(person.living.city);
console.log(person.bornYear());

//method can be add outside of object

person.remove = function(id)
{
    console.log(`removing music ${id}`);
}

person.remove(30);

//array of objects

let cars = [
    {model:'porsch',engine:'6.0'},
    {model:'tesla', engine:'6.1'},
    {model:'Benz',engine:'6.2'}
]

for(let i=0;i<cars.length;i++)
{
    console.log(cars[i].model);
}