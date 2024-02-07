document.addEventListener('DOMContentLoaded', function () {
    const inputMaxLengthOnLoad = document.getElementById('inputNama').maxLength;
    document.getElementById('sisaKarakter').innerText = inputMaxLengthOnLoad;

    const inputNamaElement = document.getElementById('inputNama');

    // Event onInput
    inputNamaElement.addEventListener('input', function () {
        const jumlahKarakterDiketik = inputNamaElement.value.length;
        const jumlahKarakterMaksimal = inputNamaElement.maxLength;

        console.log('jumlahKarakterDiketik: ', jumlahKarakterDiketik);
        console.log('jumlahKarakterMaksimal: ', jumlahKarakterMaksimal);
        const sisaKarakterUpdate = jumlahKarakterMaksimal - jumlahKarakterDiketik;
        document.getElementById('sisaKarakter').innerText = sisaKarakterUpdate.toString();

        if (sisaKarakterUpdate === 0) {
            document.getElementById('sisaKarakter').innerText = 'Batas maksimal tercapai!';
        } else if (sisaKarakterUpdate <= 5) {
            document.getElementById('notifikasiSisaKarakter').style.color = 'red';
        } else {
            document.getElementById('notifikasiSisaKarakter').style.color = 'black';
        }
    });

    // Event onFocus
    inputNamaElement.addEventListener('focus', function () {
        console.log('Input mendapatkan fokus');
    });

    // Event onBlur
    inputNamaElement.addEventListener('blur', function () {
        console.log('Input kehilangan fokus');
    });
});
