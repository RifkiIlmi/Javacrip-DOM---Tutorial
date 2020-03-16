//event = kejadian
/* 
event handler
addEventListener()
*/

//event handler
const p3 = document.querySelector('.p3');

function ubahWarnaP3() {
    p3.style.backgroundColor = 'lightGreen';
}

function ubahWarnaP2() {
    p2.style.backgroundColor = 'lightGreen';
}


const p2 = document.querySelector('.p2');
p2.onclick = ubahWarnaP2;

//addEventListener

const p4 = document.querySelector('section#b p');
p4.addEventListener('click', function() {
    const ul = document.querySelector('section#b ul');
    const liNew = document.createElement('li');
    const teksLiNew = document.createTextNode('hehe');

    liNew.appendChild(teksLiNew);

    ul.appendChild(liNew);
});