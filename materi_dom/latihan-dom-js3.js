// appendChild()
const newElement = document.createElement('li');
newElement.innerText = 'Selamat menikmati!';
const daftar = document.getElementById('daftar');
daftar.appendChild(newElement);

// InsertBefore()
const elementAwal = document.createElement('li');
elementAwal.innerText = 'Hidupkan kompor.';
const itemAwal = document.getElementById('awal');
daftar.insertBefore(elementAwal, itemAwal);


