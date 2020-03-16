//Dengan Cara DOM Selection
// const card = document.querySelector('.card');
// const close = card.querySelector('.close');

// close.addEventListener('click', function () {
//     //cara 1
//     // card.style.backgroundColor = '#666';
//     // card.innerHTML = "";
//     //atau
//     card.style.display = 'none';
// })

//cara DOM Traversal menggunakan parentElement

// const close = document.querySelectorAll('.close');
// console.log(close);

//pakai for
// for (let i = 0; i < close.length; i++) {
//     close[i].addEventListener('click', function (e) {
//         // alert('Ini tombol ke-'+i);
//         //cara 1
//         close[i].parentElement.style.display = 'none';
//         //cara 2
//         // console.log(e);
//         e.target.parentElement.style.display = 'none';
//     })
// }

//pakai forEach

// close.forEach(el => {
//     el.addEventListener('click',function (e) {
//         e.target.parentElement.style.display = 'none';
//         e.preventDefault();
//         e.stopPropagation();
//     })
// });

// const cards = document.querySelectorAll('.card');

// cards.forEach(card => {
//     card.addEventListener('click',function(e) {
//         alert('ok');
//     })
// });

//cara efektif DOM Traversal

const container = document.querySelector('.container');

container.addEventListener('click', function (e) {
    // console.log(e.target);
    if (e.target.className == 'close') {
        e.target.parentElement.style.display = 'none';
        e.preventDefault();
    }else if (e.target.className == 'card') {
        alert('ok');
    }
})