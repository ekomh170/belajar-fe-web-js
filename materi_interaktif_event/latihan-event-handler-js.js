function increment() {
    //   function increment() {
    //     document.getElementById('count').innerText++;
    //   }

    // Untuk Menambahkan Angka Ketika Di Tekan Tombol
    document.getElementById('count').innerText++;

    // Untuk Menampilkan Pesan Ketika Ditekan Hingga Angka 7
    if (document.getElementById('count').innerText == 7) {
        const contents = document.querySelector('.contents');

        //   Untuk Menambahkan Pesan Ketika Ditekan Hingga Angka 7
        const hiddenMessage = document.createElement('h4');
        hiddenMessage.innerText = 'Selamat! Anda menemukan hadiah tersembunyi...';
        contents.appendChild(hiddenMessage);

        //  Untuk Menambahkan Gambar Ketika Ditekan Hingga Angka 7
        const image = document.createElement('img');
        image.setAttribute('src', 'https://i.ibb.co/0V49VRZ/catto.jpg');
        contents.appendChild(image);

        // Untuk Menambahkan Line Break
        const lineBreak = document.createElement('br');
        contents.appendChild(lineBreak);
    }
}

// Untuk Menampilkan Pesan Ketika Halaman Di Load
function welcome() {
    alert('Sim salabim muncullah elemen-elemen HTML!');
    const contents = document.querySelector('.contents');
    contents.removeAttribute('hidden');
}


// addEventListener
// document.getElementById('incrementButton').onclick = increment;
// document.body.onload = welcome;

// Menambahkan Kode addEventListener
// window.addEventListener('load', welcome);
// document.getElementById('incrementButton').addEventListener('click', increment);
// addEventListener