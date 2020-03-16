
//DOM Manipulation Node
/*
memiliki beberapa method:
1.document.createElement('') -> membuat elemen baru
2.document.createTextNode('') -> membuat text/isi dari tag elemen
3.element.appendChild('elemenTeks') ->menambahkan teks ke dalam tag elemen
4.parent.insertBefore('yg baru','sebelum tag ke berapa?')

*/
const pbaru = document.createElement('p');
const teksnya = document.createTextNode('Rifki Ini Lo');

//simpan teks nya ke tag p
pbaru.appendChild(teksnya);

//simpan nya di akhir section A
const secA = document.getElementById('a');
secA.appendChild(pbaru);

//mencoba simpan sesuai letak yang diinginkan
const liBaru = document.createElement('li');
const isiLi = document.createTextNode('Item Baru Ini');

//simpan teksnya ke Li baru
liBaru.appendChild(isiLi);

//letakkan itemnya sesuai dengan keiinginan menggunakan
//-> insertbefore()

const ulLoc = document.querySelector('section#b ul');
const liNew = ulLoc.querySelector('li:nth-child(2)');

ulLoc.insertBefore(liBaru, liNew);

// menghapus child
const link = document.getElementsByTagName('a')[0];
secA.removeChild(link);

// me-replace tag dengan tag elemen baru

const secB = document.getElementById('b');
const p4 = secB.querySelector('p');

const h2New = document.createElement('h2');
const teknysH2 = document.createTextNode('Ini H2 Nya yey!!');

h2New.appendChild(teknysH2);

secB.replaceChild(h2New,p4);

