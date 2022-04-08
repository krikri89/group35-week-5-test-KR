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
for (i = 0; i < 10; i++) {
  console.log(i + 1);
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
for (let i = 0; i < 10; i++) {
  const random = Math.floor(Math.random() * 10 + 1);
  console.log(random);
}

console.log("----5-----");
/*
5. Naudojant while ciklą, spausdinti atsitiktinius skaičius nuo 1 iki 10. Paskutinis atspausdintas skaičius turi būti 5. (7 taškai)
*/
let skaicius = 0;
while (skaicius !== 5) {
  skaicius = Math.floor(Math.random() * (10 - 1) + 1);
  console.log(skaicius);
}

console.log("---6------");
/*
6. Sukurti masyvą, kurio ilgis būtų nuo 20 iki 30, o reikšmės būtų skaičiai nuo 10 iki 30. Surasti didžiausią masyvo reikšmę, NENAUDOJANT sort() bei Math.max() funkcijų. (7 taškai)
*/

let nuo = 20;
let iki = 30;
const num = new Array(nuo, iki);

console.log(num.length);

console.log("----7-----");
/*
7. Sugeneruokite masyvą, kurio reikšmės atsitiktinės raidės A, B, C ir D, o ilgis 100. Suskaičiuokite kiek yra kiekvienos raidės. (7 taškai)
*/
// let sarasas = [ABCD]
// sarasas.length = 100;
// const random3 = Math.floor(Math.random() * 10 +1);
// console.log(random3);

console.log("---8----");
/*
8. Parašyti funkciją - lygineSuma. Funkcijos parametrai - du kintamieji. Testų reikalavimai - abu kitamieji turi būti arba skaičiai arba masyvai(negali būti vienas skaičius, kitas masyvas).
Jei kintamieji skaičiai, grąžinti skaičių sumą, jei kintamieji masyvai - grąžinti masyvų ilgių sumą. Jei abu kintamieji skaičiai arba masyvai, bet suma nelyginė - grąžinti tekstą, kad suma nelyginė. (10 taškų)
*/
// let lygineSUma = 0;
function lygineSuma(num1, num2) {
  if (typeof num1 !== "number" || num2 !== "number") {
        console.log("ERROR");
    }
    if (typeof num1 !== "object" || num2 !== "object") {
    console.log("ERROR");
    // const suma = num1 + num2;
  } else if ((num1 + num2) % 2 !== 0 || ([num1] + [num2]) % 2 !== 0) {
    console.log(lygineSuma);
  } else {
    console.log("Suma nelygine");
  }
}
console.log(lygineSuma(2, 5));

console.log('----9----');
/*
9. Parašyti funkciją pirminisSkaicius. Funkcija turi vieną kintamąjį. Turi būti patikrinimas, kad kintamasis yra skaičius. Funkcija turi grąžinti ar pateiktas skaičius yra pirminis( pirminis skaičius yra tas, kuris dalinasi tik iš savęs ir tik iš vieneto be liekanos.) (10 taškų)
*/

function pirminiaiSkaiciai(a) {
    if (typeof a !== 'number') {
        console.log('Not a number');
}
if (a % a !==0 && a % 1 !==0) {
    console.log('Skaicius ne pirminis');
} 
const number = a % a;

return `${number} yra pirminis`
}

console.log(pirminiaiSkaiciai(9));

console.log('----10 ----');
/*
10. Parašyti funkciją telefonoNumeris. Funkcija turi priimti vieną kintamąjį - masyvą. Masyvo elementai - skaičiai, ilgis - 10. Funkcija turi grąžinti telefono numerį tokiu formatu - 
"(XXX) XXX-XXXX". (10 taškų)*/
function telefonoNumeris(phone) {
  if (typeof phone !== `object`) {
    return `error`;
  }
  const stringPhone = "" + phone;

  if (stringPhone.length < 10) {
    return `Number missing`;
  }
  if (phone < 0) {
    return `Number cannot be negative`;
  }
  for (let i = 0; i < stringPhone.length; i++) {
    const number = phone[i];
  }
  return stringPhone;
}
console.log(telefonoNumeris[]);