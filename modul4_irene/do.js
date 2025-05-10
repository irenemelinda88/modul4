let i = 1;

do {
  console.log("Angka ke-" + i);
  i++;
} while (i <= 5);

// Output:
// Angka ke-1
// Angka ke-2
// Angka ke-3
// Angka ke-4
// Angka ke-5

let ulang = true;
let hitung = 1;

do {
  console.log("Perulangan ke-" + hitung);
  hitung++;
  if (hitung > 3) {
    ulang = false;
  }
} while (ulang);

// Output:
// Perulangan ke-1
// Perulangan ke-2
// Perulangan ke-3
