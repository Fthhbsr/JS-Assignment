//! # ODEV: maaslar dizisi icin maasi ortalamanin altinda olanlara %20 zam yaparak zamli maaslari ayrı bir diziye atalım.

const maaslar = [3000, 5000, 4000, 6000, 6500];

const maasOrtalama = maaslar.reduce((x, y) => x + y, 0) / maaslar.length;
console.log(maasOrtalama);
const zamliMaas = maaslar.filter((x) => x < maasOrtalama).map((x) => x * 1.2);
console.log(zamliMaas);

///******** *//////

const kisiler = [
  {
    name: 'Ahmet',
    surname: 'Can',
    job: 'developer',
    age: 30,
  },
  {
    name: 'Mehmet',
    surname: 'Baki',
    job: 'tester',
    age: 35,
  },
  {
    name: 'Nur',
    surname: 'Ersan',
    job: 'team lead',
    age: 40,
  },
  {
    name: 'Merve',
    surname: 'Veli',
    job: 'developer',
    age: 26,
  },

  {
    name: 'Ruzgar',
    surname: 'Kuzey',
    job: 'tester',
    age: 24,
  },
];

// # ODEV: Kisiler dizisi icin asagıdaki islemleri gerceklestiren kodları yazınız

//! ## 1: Yasi(age) 33 den kücük olan kisilerin adlarini (name) listeyiniz.

kisiler.filter((x) => x.age < 33).forEach((x) => console.log(x.name));

//! ## 2: 33 yasindan kücüklerin isimlerini diziye saklayiniz.

const newList = kisiler.filter((x) => x.age < 33).map((x) => x.name);
console.log(newList);

//! ## 3: Meslegi developer olanlarin isim ve yaslarini yeni bir Obje olarak yeni diziye saklayiniz.

const newDevep = kisiler
  .filter((x) => x.job == 'developer')
  .map((x) => {
    ({ name, age } = x);
    return { name, age };
  });
console.log(newDevep);
