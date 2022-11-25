let random = Math.random() * 1000;
let randomAsInteger = Math.round(random);

if (randomAsInteger > 500) {
    console.log("Bigger than 500");
}

// wenn größer als 800
if (randomAsInteger > 800) {
    console.log(randomAsInteger + " ist größer als 800");
}

// wenn zw. 500 und 800
if (randomAsInteger > 500 && randomAsInteger < 800) {
    console.log(randomAsInteger + " ist zwischen 500 und 800");
}

// wenn zw. 200 und 500
if (randomAsInteger > 200 && randomAsInteger < 500) {
    console.log(randomAsInteger + " ist zwischen 200 und 500");
}

// wenn zw. 0 und 200
if (randomAsInteger > 0 && randomAsInteger < 200) {
    console.log(randomAsInteger + " ist zwischen 0 und 200");
}