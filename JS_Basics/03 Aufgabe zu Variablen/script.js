// Erstelle eine Variable banana mit dem Wert "Banane"
// Erstelle eine Variable apple mit dem Wert "Apple"

let banana = "Banane";
let apple = "Apple";

// Erstelle eine Variable bananaPricePerKilo mit dem Wert 2.14
// Erstelle eine Variable applePricePerKilo mit dem Wert 3.43

let bananaPricePerKilo = 2.14;
let applePricePerKilo = 3.43;

// Ein Apfel hat durchschnittlich ein Gewicht von 0.34 Kilo
// Eine Banane hat durchschnittlich ein Gewicht von 0.22 Kilo

let weightBanana = 0.22;
let weightApple = 0.34;

// Gib folgendes aus: Anzahl Bananen/Äpfel pro Kilo, Preis pro Banane/Apfel

let bananasPerKilo = 1 / weightBanana;
let applesPerKilo = 1 / weightApple;
console.log("Man benötigt " + bananasPerKilo + " Bananen für 1 kg und " + applesPerKilo + " Äpfel für 1 kg.");

let priceBanana = weightBanana * bananaPricePerKilo;
let priceApple = weightApple * applePricePerKilo;
console.log("Banane kostet " + priceBanana + " Apfel kostet " + priceApple);

// Preis von 8 Äpfeln

let result = priceApple * 8;
console.log(result);

// Preis von 17 Bananen

result = priceBanana * 17;
console.log(result);

// Preis von 1 Tonne Äpfel

result = applePricePerKilo * 1000;
console.log(result);

// Preis von 1 Tonne Bananen

result = bananaPricePerKilo * 1000;
console.log(result);