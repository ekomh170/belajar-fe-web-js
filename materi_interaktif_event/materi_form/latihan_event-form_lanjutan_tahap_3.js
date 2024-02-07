// Menambahkan event listener untuk menangani kejadian saat dokumen telah dimuat sepenuhnya
document.addEventListener('DOMContentLoaded', function () {
    // Mendapatkan panjang maksimum input pada saat dokumen dimuat
    const inputMaxLengthOnLoad = document.getElementById('inputNama').maxLength;
    // Menetapkan panjang maksimum input sebagai teks pada elemen dengan ID 'sisaKarakter'
    document.getElementById('sisaKarakter').innerText = inputMaxLengthOnLoad;

    // Menambahkan event listener untuk menangani kejadian saat input pada elemen 'inputNama' berubah
    document.getElementById('inputNama').addEventListener('input', function () {
        // Mendapatkan jumlah karakter yang telah diketik
        const jumlahKarakterDiketik = document.getElementById('inputNama').value.length;
        // Mendapatkan jumlah karakter maksimum yang diizinkan
        const jumlahKarakterMaksimal = document.getElementById('inputNama').maxLength;

        // Menampilkan jumlah karakter yang telah diketik dan jumlah karakter maksimum pada konsol
        console.log('jumlahKarakterDiketik: ', jumlahKarakterDiketik);
        console.log('jumlahKarakterMaksimal: ', jumlahKarakterMaksimal);
        // Menghitung sisa karakter yang dapat diketik
        const sisaKarakterUpdate = jumlahKarakterMaksimal - jumlahKarakterDiketik;
        // Menampilkan sisa karakter yang dapat diketik pada elemen 'sisaKarakter'
        document.getElementById('sisaKarakter').innerText = sisaKarakterUpdate.toString();

        // Mengubah warna notifikasi sisa karakter menjadi merah jika sisa karakter kurang dari atau sama dengan 5, dan hitam jika tidak
        if (sisaKarakterUpdate === 0) {
            document.getElementById('sisaKarakter').innerText = 'Batas maksimal tercapai!';
        } else if (sisaKarakterUpdate <= 5) {
            document.getElementById('notifikasiSisaKarakter').style.color = 'red';
        } else {
            document.getElementById('notifikasiSisaKarakter').style.color = 'black';
        }
    });

    // Menambahkan event listener untuk menangani kejadian saat elemen 'inputNama' mendapatkan fokus
    document.getElementById('inputNama').addEventListener('focus', function () {
        console.log('inputNama: focus');
        // Menampilkan notifikasi sisa karakter
        document.getElementById('notifikasiSisaKarakter').style.visibility = 'visible';
    });

    // Menambahkan event listener untuk menangani kejadian saat elemen 'inputNama' kehilangan fokus
    document.getElementById('inputNama').addEventListener('blur', function () {
        console.log('inputNama: blur');
        // Menyembunyikan notifikasi sisa karakter
        document.getElementById('notifikasiSisaKarakter').style.visibility = 'hidden';
    });

    // Menambahkan event listener untuk menangani kejadian saat nilai pada elemen 'inputCaptcha' berubah
    document.getElementById('inputCaptcha').addEventListener('change', function () {
        console.log('inputCaptcha: change');
        // Mendapatkan nilai input pada elemen 'inputCaptcha'
        const inputCaptcha = document.getElementById('inputCaptcha').value;
        // Mendapatkan status tombol submit
        const submitButtonStatus = document.getElementById('submitButton');

        // Mengaktifkan atau menonaktifkan tombol submit berdasarkan nilai input pada elemen 'inputCaptcha'
        if (inputCaptcha === 'PRNU') {
            submitButtonStatus.removeAttribute('disabled');
        } else {
            submitButtonStatus.setAttribute('disabled', '');
        }
    });

    // Menambahkan event listener untuk menangani kejadian saat formulir 'formDataDiri' disubmit
    document.getElementById('formDataDiri').addEventListener('submit', function (event) {
        // Mendapatkan nilai input pada elemen 'inputCaptcha'
        const inputCaptcha = document.getElementById('inputCaptcha').value;

        // Memeriksa apakah nilai input pada elemen 'inputCaptcha' sesuai dengan yang diharapkan
        if (inputCaptcha === 'PRNU') {
            // Menampilkan pesan sukses jika nilai input sesuai
            alert('Selamat! Captcha Anda lolos :D');
        } else {
            // Menampilkan pesan gagal jika nilai input tidak sesuai
            alert('Captcha Anda belum tepat :(');
            // Menonaktifkan tombol submit
            document.getElementById('submitButton').setAttribute('disabled', '');
        }
        // Mencegah pengiriman formulir secara default
        event.preventDefault();
    });

    // Menambahkan event listener untuk menangani kejadian saat elemen 'inputCopy' menyalin teks
    document.getElementById('inputCopy').addEventListener('copy', function () {
        alert('Anda telah menyalin sesuatu...');
    });
    
    // Menambahkan event listener untuk menangani kejadian saat elemen 'inputPaste' menempelkan teks
    document.getElementById('inputPaste').addEventListener('paste', function () {
        alert('Anda telah menempelkan sebuah teks...');
    });
});

// Input Event: onInput, onFocus, dan onBlur
// Event onChange, Event onCopy, Event onPaste
