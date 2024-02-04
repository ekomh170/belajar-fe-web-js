// Latihan 1 - Informasi Dasar DOM
// const head = document.head;
// const body = document.body;
// const gambar = document.getElementById('gambarUtama');
// for (let item of buttons) {
//     console.log(item);
//   }

// Latihan 2 - Cara Membuat Element Baru HTML Dari JavaScript ke Halaman HTML
// const newElement = document.createElement('p');
// newElement.innerText = 'Selamat datang ke HTML kosong ini :)';
// newElement.innerHTML = '<b>Selamat datang</b> ke HTML kosong ini :)';

// Gambar
// const newImg = document.createElement('img');

// Attribute Gambar
// newImg.setAttribute('src', 'https://picsum.photos/200/300');

// Latihan 3 - Mengubah Konten HTML index_dom_konten.html
// Mengubah Ukuran Pada Tag Gambar

gambar.setAttribute('width', 300);
// JavaScript Automatic Type Conversion pada setAttribute()
// gambar.setAttribute('width', '300');
gambar.setAttribute('height', 215);

// Mengubah Tipe Element Button
// Pilih Class Button
// const buttons = document.querySelectorAll('.button');
// Pilih Element Anak Pertama dari Class Button Urutan Ke 3
// const playButton = buttons[3];
// const playButtonElement = playButton.children[0];
// Set Tipe Element Button
// playButtonElement.setAttribute('type', 'submit');

let dicoding = document.getElementById('dicodingLink');
// dicoding.innerText = 'Belajar Programming di Dicoding';
dicoding.innerHTML = '<i>Belajar Programming di Dicoding</i>';

const buttons = document.getElementsByClassName('button');
for (const button of buttons) {
    button.children[0].style.borderRadius = '6px';
  }