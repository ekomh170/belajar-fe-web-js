// membuat custom event
// const eventBuatan = new Event('eventBuatanKita')s;

// meletakkannya pada sebuah method addEventListener()
// element.addEventListener('eventBuatanKita'); 

// Membuat custom event dengan nama 'changeCaption'
const changeCaption = new Event('changeCaption');

// Menambahkan event listener pada window untuk event 'load'
window.addEventListener('load', function () {
    // Mendapatkan elemen tombol dari dokumen HTML dengan id 'tombol'
    const tombol = document.getElementById('tombol');

    // Menambahkan event listener pada tombol untuk event custom 'changeCaption'
    tombol.addEventListener('changeCaption', customEventHandler);

    // Menambahkan event listener pada tombol untuk event 'click'
    tombol.addEventListener('click', function () {
        // Memanggil dispatchEvent untuk memicu event custom 'changeCaption' saat tombol diklik
        tombol.dispatchEvent(changeCaption);
    });
});

// Mendefinisikan fungsi customEventHandler yang akan dipanggil saat event 'changeCaption' terjadi
function customEventHandler(ev) {
    // Menampilkan pesan di console yang memberitahu jenis event yang dijalankan
    console.log('Event ' + ev.type + ' telah dijalankan');
    // Mendapatkan elemen dengan id 'caption' dan mengubah teksnya menjadi 'Anda telah membangkitkan custom event'
    const caption = document.getElementById('caption');
    caption.innerText = 'Anda telah membangkitkan custom event';
}
