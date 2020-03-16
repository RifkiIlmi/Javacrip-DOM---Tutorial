//DOM Selection

//document.getElementById() -> element
const judul = document.getElementById('judul');
judul.style.color = 'blue';
judul.style.backgroundColor = 'grey';
judul.innerHTML = 'M Rifki Ilmi';

//document.getElementsByTagName() -> HTML Colection
const p = document.getElementsByTagName('p');

for (let i = 0; i < p.length; i++) {
    p[i].style.backgroundColor = 'lightBlue';
}

const h1 = document.getElementsByTagName('h1')[0];
h1.style.fontSize = '50px';

//document.getElementsByClassName() -> HTMLCollection
const p1 = document.getElementsByClassName('p1')[0];
p1.innerHTML = 'VoCabuLarY';

//document.querySelector() -> element

const p4 = document.querySelector('#b p');
p4.style.color = "yellow";

const li2 = document.querySelector('section#b ul li:nth-child(2)');
li2.style.backgroundColor = "pink";

//document.querySelectorAll() -> nodeList

const pqa = document.querySelectorAll('p');

for (let i = 0; i < pqa.length; i++) {
    pqa[i].style.backgroundColor = 'lightGrey';
    
}

//mengubah node Root
const sectionB = document.getElementById('b');
const p4x = sectionB.querySelector('p');
p4x.style.fontSize = '50px'; 

