# Sumber Materi
Materi-materi di bawah ini merupakan rangkuman dari pembelajaran seputar Browser Object Model (BOM), Document Object Model (DOM), Event Handling, dan Web Storage. Materi ini dapat dijadikan panduan dasar dalam pengembangan aplikasi web.

# Materi: Browser Object Model (BOM) & Document Object Model (DOM)

## Browser Object Model (BOM)
- **Definisi:** Objek JavaScript di browser untuk mengontrol fungsi-fungsi browser.
- **Contoh Member BOM:**
  - `alert`: Menampilkan pesan pop-up di browser.
  - `prompt`: Menampilkan pesan pop-up yang dapat menerima input pengguna.
  - `console`: Menampilkan pesan atau nilai di console browser.

## Document Object Model (DOM)
- **Definisi:** Objek JavaScript di browser untuk mengontrol dan memanipulasi struktur konten pada website.
- **DOM Tree:**
  - Struktur website dalam bentuk pohon yang terbentuk dari struktur HTML.
- **Teknik Manipulasi DOM:**
  - Mendapatkan Elemen: `document.querySelector`, `document.querySelectorAll`, `document.getElementById`.
  - Membuat Elemen: `document.createElement`.
  - Mengubah Konten: `element.innerHTML`, `element.innerText`, `element.setAttribute`.
  - Menambahkan Elemen: `element.appendChild`.

# Materi: Event Handling

## Macam-macam Event
- **Window Event**
- **Form Event**
- **Keyboard Event**
- **Clipboard Event**
- **Mouse Event**

## Menambahkan Event Handler pada HTML Element
- Menggunakan metode `element.addEventListener` untuk menangani event.

## Custom Event
- Event yang dapat ditentukan nama dan cara membangkitkannya.

## Konsep Event Bubbling dan Event Capturing
- **Event Bubbling:** Peristiwa dari elemen dalam ke elemen luar.
- **Event Capturing:** Peristiwa dari elemen luar ke elemen dalam.

## Contoh Event pada Elemen `<form>` dan `<input>`
- `onSubmit`: Tombol submit pada form ditekan.
- `onInput`, `onFocus`, `onBlur`, `onChange`: Event pada elemen input.
- `onCopy`, `onPaste`: Event pada elemen input terkait dengan menyalin dan menempel.

# Materi: Web Storage

## Web Storage Overview
- **Definisi:** Browser API untuk menyimpan data dengan pola key-value.
- **Jenis Web Storage:**
  - **Local Storage:** Menyimpan data tanpa batasan waktu.
  - **Session Storage:** Menyimpan data sementara, hilang saat browser/tab ditutup.

## Fungsi-fungsi Web Storage
- `setItem`: Menyimpan data dengan key dan value.
- `getItem`: Mengakses data berdasarkan key.

## Menyimpan dan Mendapatkan Data Kompleks pada Web Storage
- Menggunakan `JSON.stringify()` untuk menyimpan objek sebagai string.
- Menggunakan `JSON.parse()` untuk mendapatkan objek dari string.