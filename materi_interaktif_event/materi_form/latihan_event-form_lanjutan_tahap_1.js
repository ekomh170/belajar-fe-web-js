// Menambahkan event listener untuk menangani kejadian saat dokumen telah dimuat sepenuhnya
document.addEventListener('DOMContentLoaded', function () {
    // Mendapatkan panjang maksimum input pada saat dokumen dimuat
    const inputMaxLengthOnLoad = document.getElementById('inputNama').maxLength;
    // Menetapkan panjang maksimum input sebagai teks pada elemen dengan ID 'sisaKarakter'
    document.getElementById('sisaKarakter').innerText = inputMaxLengthOnLoad;
});