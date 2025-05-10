let i = 1;

while (i <= 5) {
  console.log("Angka ke-" + i);
  i++;
}
// Output:
// Angka ke-1
// Angka ke-2
// Angka ke-3
// Angka ke-4
// Angka ke-5

let lanjut = true;
let hitung = 1;

while (lanjut) {
  console.log("Perulangan ke-" + hitung);
  hitung++;
  if (hitung > 3) {
    lanjut = false;
  }
}
// Output:
// Perulangan ke-1
// Perulangan ke-2
// Perulangan ke-3
