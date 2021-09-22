/// Soal - 01
/// Kamu diminta untuk membuat sebuah perulangan menggunakan for loop, untuk mencetak angka prima dari 1 ~ 100
/// EDIT HERE
let arr = [];
for (let i = 2; i <= 100; i++) {
  if (i !== 4 && i <= 5) {
    arr.push(i);
  } else {
    if (i > 5 && i % 2 !== 0 && i % 3 !== 0 && i % 5 !== 0) {
      arr[arr.length] = i;
    }
  }
}

console.log(arr);

/// Soal - 02
/// Kamu diminta untuk menemukan bilangan prima ke-50, temukan bilangan tersebut menggunakan while loop
let primeCounter = 0;
let fiftiethPrime = 50;

/// EDIT HERE
let i = 2;
let fiftiethNumberOfPrime;

while (primeCounter < fiftiethPrime) {
  if (i !== 4 && i <= 5) {
    fiftiethNumberOfPrime = i;
    primeCounter++;
  } else {
    if (i > 5 && i % 2 !== 0 && i % 3 !== 0 && i % 5 !== 0) {
      fiftiethNumberOfPrime = i;
      primeCounter++;
    }
  }
  i++;
}

console.log(fiftiethNumberOfPrime);

/// Soal - 03
/// Kamu diminta untuk menemukan bilangan ganjil ke-50, temukan bilangan tersebut menggunakan do while loop
let oddCounter = 0;
let fiftiethOdd = 50;

/// EDIT HERE
let fiftiethNumberOfOdd;
i = 0;

do {
  if (i % 2 !== 0) {
    fiftiethNumberOfOdd = i;
    oddCounter++;
  }
  i++;
} while (oddCounter < fiftiethOdd);

console.log(fiftiethNumberOfOdd);
