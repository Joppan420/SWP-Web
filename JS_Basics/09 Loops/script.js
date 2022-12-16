//Erstelle mit Hilfe einer Schleife und Modulo das folgende Ausgabe liefert: 
//X X X X 
//O O O O 
//X X X X 
//O O O O 


for (let i = 0; i < 4; i++){
    let output = "";
    for (let j = 0; j < 4; j++){
        if(i%2 != 0){
            output += "0";
        }
        else{
            output += "X";
        }
    }
    console.log(output);
}

//2. Versuche in einer for - Schleife (1-100) alle geraden Zahlen zu addieren 
//(zwei Lösungswege ⇒ Zähler dahingehend verändern das er nur gerade Zahlen zählt und mit Modulo arbeiten.) 
let sum = 0;
for (let i = 0; i <= 100; i+=2) {
    sum += i
}
console.log("Die Summe aller geraden Zahlen zwischen 1 und 100 ist " + sum)