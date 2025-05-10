// Nilai Boolean langsung
let isOnline = true;
let isLulus = false;

// Boolean dari perbandingan
let lebihBesar = 10 > 5; // true
let samaDengan = 7 === 8; // false

// Boolean dalam kondisi if
let umur = 18;
if (umur >= 17) {
  console.log("Boleh membuat KTP");
} else {
  console.log("Belum cukup umur");
}

// Menggunakan Boolean() untuk konversi
let nilai1 = Boolean(0);       // false (karena 0 dianggap falsy)
let nilai2 = Boolean("Halo");  // true (karena string tidak kosong dianggap truthy)
let nilai3 = Boolean(null);    // false
