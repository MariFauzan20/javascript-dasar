/// Soal - 01
/// Dibawah ini akan ditampilkan daftar pengeluaran bulan ini beserta gaji yang akan diterima, tugas-mu adalah untuk menghitung gaji yang tersisa

/// Pegeluaran
let pengeluaran = [
  ["gundam", 750000],
  ["makan", 2000000],
  ["kost", 1000000],
  ["subscription", 250000],
];

/// Gaji
let gajiPokok = 5000000;
let gajiBonus = (gajiPokok * 10) / 100;
let gajiLembur = (gajiPokok * 5) / 100;

/// Sisa Gaji
let totalPengeluaran = 0;
let totalGaji = gajiPokok + gajiBonus + gajiLembur;

pengeluaran.map((value) => {
  totalPengeluaran += value[1];
});

const sisaGaji = totalGaji - totalPengeluaran;

console.log(sisaGaji);

/// Soal - 02
/// Gunakan operator yang tepat untuk mengetahui apakah 2 variable dibawah ini memiliki nilai yang sama (tipe data tidak termasuk)
const oneInString = "1";
const oneInNumber = 1;
const isSame = oneInString == oneInNumber ? true : false;

console.log(isSame);

/// Soal - 03
/// Gunakan operator yang tepat untuk mengetahui apakah studentA memiliki nilai yang lebih tinggi atau sama dengan studentB
const studentA = 75;
const studentB = 80;
const isHigher = studentA == studentB || studentA > studentB ? true : false;
console.log(isHigher);

/// Soal - 04
/// Gunakan operator yang tepat untuk membedakan 2 buah variable yang terdapat pada soal-02 berdasarkan value-nya (tipe data juga dihitung)
const final = oneInString === oneInNumber ? true : false;

console.log(final);
