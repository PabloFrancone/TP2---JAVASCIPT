// act11
const pal = "msupercalifragilisticoexplendoroso";

const letsReps = {};

for (let i = 0; i < pal.length; i++) {
    const letra = pal[i];
    
    if (letsReps[letra]) {
        letsReps[letra]++;
    } else { 
        letsReps[letra] = 1;
    }
}

console.log("Letras distintas y sus repeticiones:");
for (const letra in letsReps) {
    console.log(`${letra}: ${letsReps[letra]}`);
}