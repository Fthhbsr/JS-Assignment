//! ÖDEV1:
// fiyatlar dizisinde her bir fiyata %10 zam yapalım. NOT: FOREACH kullanılmalı ve orjinal dizi değiştirilmeli.

// const fiyatlar = [100, 250, 50, 89];

// const fiyatlar = [100, 250, 50, 89];

// fiyatlar.forEach((v, i, arr) => arr[i] = v*1.1);
// console.log(fiyatlar);

//! ÖDEV2:
// fiyatlar dizisindeki fiyatı 90'dan büyük olan değerleri konsola tek tek bastırınız.

// const fiyatlar = [100, 250, 50, 89];
// ÇÖZÜM-1
// let buyuk = fiyatlar.filter((v) => v > 90).forEach((v) => console.log(v));
// ÇÖZÜM-2
// fiyatlar.forEach((v) => v>90 && console.log(v));

//! ÖDEV3:
// fiyatlar dizisindeki fiyatı 110'dan küçük olan değerlere %10 artış yapın ve bu değerleri konsola tek tek bastırınız.

// const fiyatlar = [100, 250, 50, 89];
// fiyatlar
//   .filter((x) => x < 110)
//   .map((x) => x * 1.1)
//   .forEach((x) => console.log(x.toFixed(2)));

//!  ÖDEV4:
// maaslar dizisinde 4000'den düsük olan maaslara %50 zam yapmak istiyoruz ve bunu ayri dizi olarak saklamak istiyoruz.

// const maaslar = [3000, 5000, 4000, 6000, 6500];

// const zamlimaaslar = maaslar.filter((x) => x < 4000).map((x) => x * 1.5);

// console.log(zamlimaaslar);

//! ÖDEV5:
// Maasi 4000 'den büyük olanlara %25 zam yaparak sonuçlari konsolda yazdiralim.

// const maaslar = [3000, 5000, 4000, 6000, 6500];

// maaslar
//   .filter((x) => x > 4000)
//   .map((x) => x * 1.25)
//   .forEach((x) => console.log(x));

//!  ÖDEV6:
// Maaslarin toplamini hem forEach ile hem de reduce methodu ile çözünüz.

const maaslar = [3000, 5000, 4000, 6000, 6500];

// ÇÖZÜM-1  reduce metodu

console.log(maaslar.reduce((x, y) => x + y));

// ÇÖZÜM-2  forEach metodu

let maastoplam = 0;

maaslar.forEach((x) => (maastoplam += x));

console.log(maastoplam);
