/*1. Palyginti du skaičius a ir b. Išvesti į konsolę, kuris didesnis arba jie lygūs. (4 taškai)
 */
console.log("----1---------");
let a = "bla";
let b = 2;

if (a > b) {
  console.log(`Number ${a} is bigger than ${b}`);
} else if (a < b) {
  console.log(`Number ${b} is bigger than ${a}`);
} else if (a === b) {
  console.log("numbers are equal");
} else {
  console.log("ERROR: check if these are numbers");
}

console.log("-----2--------");
/*
2. Naudojant for ciklą, išvesti į konsolę skaičius nuo 1 iki 10. (5 taškai)
*/
for (i = 0; i < 11; i++) {
  console.log(i);
}

console.log("---3----");
/*
3. Naudojant for ciklą, išvesti į konsolę skaičius nuo 0, 2, 4, 6, 8, 10. (5 taškai)
*/
for (i = 0; i < 12; i += 2) {
  console.log(i);
}

console.log("----4-----");
/*
4. Naudojant for ciklą, sugeneruoti penkis atsitiktinius skaičius nuo 1 iki 10. Išvesti juos konsolėje. (5 taškai)
*/

function rand(max, min) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
for (let i = 0; i < 5; i++) {
  console.log(rand(1, 10));
}

console.log("----5-----");
/*
5. Naudojant while ciklą, spausdinti atsitiktinius skaičius nuo 1 iki 10. Paskutinis atspausdintas skaičius turi būti 5. (7 taškai)
*/
let skaicius = 0;
while (skaicius !== 5) {
  skaicius = rand(1, 10);
  console.log(skaicius);
}

console.log("---6------");
/*
6. Sukurti masyvą, kurio ilgis būtų nuo 20 iki 30, o reikšmės būtų skaičiai nuo 10 iki 30. Surasti didžiausią masyvo reikšmę, NENAUDOJANT sort() bei Math.max() funkcijų. (7 taškai)
*/

let arr = [];
let max = 9;

for (let i = 0; i < rand(20, 30); i++) {
  arr.push(rand(10, 30));
}
console.log(arr);

for (let i = 0; i < arr.length; i++) {
  if (arr[i] > max) {
    max = arr[i];
  }
}
console.log("max:" + max);

console.log("----7-----");
/*
7. Sugeneruokite masyvą, kurio reikšmės atsitiktinės raidės A, B, C ir D, o ilgis 100. Suskaičiuokite kiek yra kiekvienos raidės. (7 taškai)
*/
let sarasas = ["A", "B", "C", "D"];
const arr2 = [];

for (let i = 0; i < 100; i++) {
  arr2.push(sarasas[rand(0, 3)]);
}

console.log(arr2);

let countA = 0;
let countB = 0;
let countC = 0;
let countD = 0;

for (let i = 0; i < arr2.length; i++) {
  if (arr2[i] === "A") {
    countA++;
  }
  if (arr2[i] === "B") {
    countB++;
  }
  if (arr2[i] === "C") {
    countC++;
  }
  if (arr2[i] === "D") {
    countD++;
  }
}
console.log(
  `Raidžių masyve yra: A: ${countA}, B: ${countB}, C: ${countC}, D: ${countD}`
);

console.log("---8----");
/*
8. Parašyti funkciją - lygineSuma. Funkcijos parametrai - du kintamieji. Testų reikalavimai - abu kitamieji turi būti arba skaičiai arba masyvai(negali būti vienas skaičius, kitas masyvas).
Jei kintamieji skaičiai, grąžinti skaičių sumą, jei kintamieji masyvai - grąžinti masyvų ilgių sumą. Jei abu kintamieji skaičiai arba masyvai, bet suma nelyginė - grąžinti tekstą, kad suma nelyginė. (10 taškų)
*/
// let lygineSUma = 0;
function lygineSuma(num1, num2) {
  if (typeof num1 === "number" && num2 === "number") {
    let suma = num1 + num2;
    if (suma % 2 === 0) {
      return `Skaiciu num1 ir num2 yra ${suma}`;
    } else {
      return "Skaiciu suma nelygine";
    }
  } else if (Array.isArray(num1) && Array.isArray(num2)) {
    let suma = num1.length + num2.length;
  if (suma % 2 === 0) {
    return `Masyvu num1 and num2 suma yra ${suma}`;
  } else {
    return "Masyvu ilgiu suma nelygine";
  }
  } else {
    return 'Pateikti neteisingi kintamieji'
  }
}
console.log(lygineSuma(2, 5));
console.log(lygineSuma(2, 6));
console.log(lygineSuma("2", 5));
console.log(lygineSuma([2], 5));
console.log(lygineSuma([2], [5]));
console.log(lygineSuma([2], [5]));
console.log(lygineSuma([2], [5, 2, "345", "1"]));

console.log("----9----");
/*
9. Parašyti funkciją pirminisSkaicius. Funkcija turi vieną kintamąjį. Turi būti patikrinimas, kad kintamasis yra skaičius. Funkcija turi grąžinti ar pateiktas skaičius yra pirminis( pirminis skaičius yra tas, kuris dalinasi tik iš savęs ir tik iš vieneto be liekanos.) (10 taškų)
*/

function pirminiaiSkaiciai(a) {
  if (typeof a !== "number") {
    console.log("Not a number");
  }
  let count = 0;
  for (let i = 1; i <= a; i++) {
    if (a % i === 0) {
      count++;
    }
  }
  if (count < 2) {
    return "ivestas blogas skaicius";
  }
  if (count === 2) {
    return "Ivestas skaicius yra pirminis";
  }
  if (count > 2) {
    return "Ivestas skaicius ne pirminis";
  }
}

console.log(pirminiaiSkaiciai("abcd"));
console.log(pirminiaiSkaiciai([4, 4, "abcd"]));
console.log(pirminiaiSkaiciai(0));
console.log(pirminiaiSkaiciai(1));
console.log(pirminiaiSkaiciai(3));
console.log(pirminiaiSkaiciai(15));
console.log(pirminiaiSkaiciai(17));

console.log("----10 ----");
/*
10. Parašyti funkciją telefonoNumeris. Funkcija turi priimti vieną kintamąjį - masyvą. Masyvo elementai - skaičiai, ilgis - 10. Funkcija turi grąžinti telefono numerį tokiu formatu - 
"(XXX) XXX-XXXX". (10 taškų)*/

function telefonoNumeris(a) {
  if (!Array.isArray(a)) {
    return `Kintamasis nera masyvas`;
  }
  if (a.length !== 10) {
    return `Number missing`;
  }
  for (let i = 0; i < 10; i++) {
    if (typeof a[i] !== "number") {
      return "Masyvo reiksmes turi buti skaiciai";
    }
  }
  return `(${a[0]}${a[1]}${a[2]}) ${a[3]}${a[4]}${a[5]}-${a[6]}${a[7]}${a[8]}${a[9]}`;
}
console.log(telefonoNumeris(17));
console.log(telefonoNumeris("asdasd"));
console.log(telefonoNumeris([9, 5, 8, 6, 5, 4, 7, 1, 2]));
console.log(telefonoNumeris([9, 5, 8, 6, 5, 4, 7, 1, 2, 1, 8]));
console.log(telefonoNumeris([9, 5, 8, 6, 5, 4, "7", 1, 2, 1, 8]));
console.log(telefonoNumeris([9, 5, 8, 6, 5, 4, "7", 1, 2, 1]));
console.log(telefonoNumeris([9, 5, 8, 6, 5, 4, 7, 1, 2, 1]));
