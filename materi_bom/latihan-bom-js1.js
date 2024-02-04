// Latihan 1
const tamu = prompt('Siapakah Anda?');
alert('Selamat datang ' + tamu + '!');

// Latihan 2
let message = 'Halo, user!';
alert(message);


// Latihan 3
// let pesanInput = prompt('Masukkan pesan sesukamu...');
// let pesanInput = prompt('Silakan masukkan angka...');
let pesanInput = Number(prompt('Masukkan angka sesukamu...')); 
console.log(typeof pesanInput); // -> Cek Tipe data 
let name = prompt('Silakan masukkan nama Anda!', 'Eko Muchamad Haryono');
console.log('Nama Saya Adalah' + name); // -> Cek Tipe data 

// Latihan 4
// Silakan aktifkan kode di bawah ini dengan hapus komentar untuk melihat hasilnya
// console.log('Ini adalah console log');
// console.info('Ini adalah console info');
// console.warn('Ini adalah console warn');
// console.error('Ini adalah console error');


// Latihan 5
// Cara pertama
window.alert('Hello World');
// Cara kedua
alert('Hello World');

function alert(nama) {
    console.log('Hati-hati, ' + nama);
  }
   
  alert('Chewbacca'); // Output: Hati-hati, Chewbacca
  // Output di atas akan tercetak ke console browser
   
  window.alert('Chewbacca'); // Output: Hati-hati, Chewbacca
  // Output di atas akan tetap tercetak pada console browser

  function alert(nama) {
    console.log('Hati-hati, ' + nama);
  }
   
  // Silakan aktifkan kode di bawah ini dengan hapus komentar untuk melihat hasilnya
  
  // 1. Output di bawah akan tercetak ke console browser
  // alert('Chewbacca'); // Output: Hati-hati, Chewbacca
   
  // 2. Output di bawah akan tetap tercetak pada console browser
  // window.alert('Chewbacca'); // Output: Hati-hati, Chewbacca
  