let element;

element = document.URL;
element = document.body;
element = document.all;
element = document.head;

console.log(element);

//looping all the images
//first convert into array and then loop

let image = document.images;

let imagearr = Array.from(image);

imagearr.forEach(function (image){
    console.log(image);
})

//selecting dom elements

let heading = document.getElementById('heading');
console.log(heading);
console.log(heading.id);
console.log(heading.classList);
console.log(heading.textContent);

//change the css

heading.style.backgroundColor = '#333';
heading.style.color = '#FFFFFF';
heading.style.padding = '20px';

//change the text
heading.textContent = 'The Best Course';
//or
heading.innerText = 'The Good Course';

//using queryselector

let learningheading = document.querySelector('#learn'); //this is for selecting id

learningheading.innerText = 'A new course';

let tagline = document.querySelector('.tagline'); //this is for selecting class

let newtext = tagline.textContent.replace('$15','$12');

tagline.textContent=newtext;
//selecting a tag

let headin = document.querySelector('h2');
console.log(headin);

//nest your selector with a css syntax
let img = document.querySelector('.card img');
console.log(img);

//query selector support first-child, second-child, nth-child;

let link = document.querySelector('#primary a:first-child');
let lin = document.querySelector('#primary a:last-child');
let li = document.querySelector('#primary a:nth-child(2)');

console.log(li);

//getElementsByClassName

const linked = document.getElementsByClassName('link');
console.log(linked);

//or

const linn = document.getElementById('primary').getElementsByClassName('link');
console.log(linn);

const imgt = document.getElementsByTagName('img');
console.log(imgt);

//selecting multiple element

const courses = document.querySelectorAll('.card h4');

courses.forEach(function(course){
    console.log(course.textContent);
});

const oddLinks = document.querySelectorAll('#primary a:nth-child(odd)');

oddLinks.forEach(function(odd){
    console.log(odd);
})

const addcartbtns = document.querySelectorAll('.add-to-cart');

addcartbtns.forEach(function(button){
    button.textContent = 'Something new';
})

//traversing dom from parent to children

const navigation = document.querySelector('#primary');

let elem;

elem = navigation.children;

console.log(elem);

//traversing dom from children to parent

const navi = document.querySelector('.add-to-cart');

let ele;

ele = navi.parentElement.parentElement; // or we can use previousElementSibling feature to get to parent

console.log(ele);

// we use nextElementSibling to get next element in dom

//creating html element

const newlink = document.createElement('a');

newlink.class = 'link';
newlink.href = '#';

newlink.appendChild(document.createTextNode('A new link'));

document.querySelector('#primary').appendChild(newlink);

//replacing a html element

const newHeading = document.createElement('h2');

//adding id
newHeading.id = 'heading';

//adding class
newHeading.classList.add('heading');

//adding text
newHeading.appendChild(document.createTextNode('The Best Courses'));

//selecting old heading
const oldheading = document.querySelector('#heading');

//selecting parent
const Courseslist = document.querySelector('#courses-list');

Courseslist.replaceChild(newHeading,oldheading);

//removing element

const navig = document.querySelectorAll('.link');

navig[2].remove();
console.log(navig);

//reading class

const l = document.querySelector('.link');
let elemen=l;

//read class
elemen=l.className;
//read class (dom token list)
elemen=l.classList;

//access specific class with classlist
elemen=l.classList[0];
console.log(elemen);
//getAttribute and setAttribute are imp function keep in mind also hasAttribute , removeAttribute


