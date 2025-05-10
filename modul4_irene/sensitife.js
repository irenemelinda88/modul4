// Variabel
let nama = "Tio Saputra";
let Nama = "Tio Saputra";
let nAmE = "Tio Saputra";

// Fungsi
function contoh() {
  console.log("Ini adalah contoh fungsi.");
}

function Contoh() {
  console.log("Ini adalah contoh fungsi lain.");
}

// Kata kunci
if (true) {
  console.log("Ini akan dieksekusi.");
}

// if (TRUE) // Ini akan menyebabkan error
// if (True) // Ini juga akan menyebabkan error

// Perbandingan
let string1 = "Hello";
let string2 = "hello";
let string3 = "HELLO";

if (string1 === string2) {
  console.log("String1 sama dengan string2."); // Tidak akan dieksekusi
}

if (string1 === string3) {
  console.log("String1 sama dengan string3."); // Tidak akan dieksekusi
}

if (string1 !== string3) {
  console.log("String1 tidak sama dengan string3."); // Akan dieksekusi
}

// Metode
let text = "Ini adalah contoh teks.";
console.log(text.toUpperCase()); // "INI ADALAH CONTOH TEKS."
console.log(text.toLowerCase()); // "ini adalah contoh teks."