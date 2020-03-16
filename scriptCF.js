const tUbahWarna = document.getElementById('tUbahWarna');

//cara mengambil bodyada 2
/*  1. const body = document.getElementsByTagName('body')[0];
    2. document.body
*/

tUbahWarna.addEventListener('click', function() {
    // document.body.style.backgroundColor = 'lightGreen';
    // document.body.setAttribute('class', 'biru-muda');
    document.body.classList.toggle('biru-muda');
});

const tAcakWarna = document.createElement('button');
const teksAcakWarna = document.createTextNode('Change to a Random Color');

tAcakWarna.append(teksAcakWarna);

tAcakWarna.setAttribute('type', 'button');

tUbahWarna.after(tAcakWarna);

tAcakWarna.addEventListener('click', function() {
    const r = Math.round(Math.random() * 255 + 1);
    const g = Math.round(Math.random() * 255 + 1);
    const b = Math.round(Math.random() * 255 + 1);
    // console.log(r);
    document.body.style.backgroundColor = 'rgb('+r+','+g+','+b+')';
});

const sMerah = document.querySelector('input[name=sMerah]');
const sHijau = document.querySelector('input[name=sHijau]');
const sBiru = document.querySelector('input[name=sBiru]');

sMerah.addEventListener('input', function() {
    const r = sMerah.value;
    const g = sHijau.value;
    const b = sBiru.value;
    document.body.style.backgroundColor = 'rgb('+r+','+g+','+b+')';
});

sHijau.addEventListener('input', function() {
    const r = sMerah.value;
    const g = sHijau.value;
    const b = sBiru.value;
    document.body.style.backgroundColor = 'rgb('+r+','+g+','+b+')';
});

sBiru.addEventListener('input', function() {
    const r = sMerah.value;
    const g = sHijau.value;
    const b = sBiru.value;
    document.body.style.backgroundColor = 'rgb('+r+','+g+','+b+')';
});

document.body.addEventListener('mousemove', function(e) {
    //posisi mouse berdasarkan sumbu x dan y
        // console.log(e.clientX);
        // console.log(e.clientY);
    //posisi mouse berdasarkan lebar dan panjang wondow
        //console.log(window.innerWidht)
        //console.log(window.innerHeight)
    //kita buat rumus rgb berdasarkan data diatas
    const xPos = Math.round((e.clientX / window.innerWidth) * 255);
    const yPos = Math.round((e.clientY / window.innerHeight) * 255);
    // const b = Math.round(Math.random() * 255 + 1);

    document.body.style.backgroundColor = 'rgb('+ xPos +','+ yPos +', 100)';
});

