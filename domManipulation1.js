//Dom Manipulation Element

/* Berisi :
    1. element.setAttribute();
    2. element.removeAttribute();
    3. element.getAttribute();

    4. element.innerHtml = ;
    5. element.style.<properties> = '' ;

    5. element.classList.add();
    5. element.classList.remove();
    5. element.classList.toggle();
    5. element.classList.item();
    5. element.classList.contains();
    5. element.classList.replace();
*/

const secA = document.querySelector('section#a');
const p1 = secA.getElementsByClassName('p1')[0];

p1.innerHTML = 'M Rifki Ilmi';
p1.setAttribute('id','rifki');
p1.getAttribute('id');//coba syntax ini di console
p1.removeAttribute('id');

const p2 = secA.getElementsByClassName('p2')[0];

p2.classList.add('data');
p2.classList.replace('data', 'dataNew');