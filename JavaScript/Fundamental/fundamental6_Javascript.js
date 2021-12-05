for(let i=0;i<10;i++)
{
    console.log(`number : ${i}`);
}

const shoppingcart = ['nike','addidas','puma','allen solly'];

for(let i=0;i<shoppingcart.length;i++)
{
    console.log(shoppingcart[i]);
}

let i=0;
while(i<shoppingcart.length)
{
    console.log(shoppingcart[i]);
    i++;
}

shoppingcart.forEach(function(product,index){
    console.log(`${index}:${product}`);
})


let myclub = {
    name:'barca',
    player:'messi',
    achievment:'sextuple'
}

//looping object
for(let key in myclub)
{
    console.log(`${key} : ${myclub[key]}`);
}