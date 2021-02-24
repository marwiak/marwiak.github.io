const schriftzug = document.querySelectorAll("#schriftzug path");
for (let i = 0; i < schriftzug.length; i++) {
    console.log(`Letter ${i} is ${schriftzug[i].getTotalLength()}`);

}

