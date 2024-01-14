let height = document.getElementById("magassag");
let weight = document.getElementById("testsuly");
let index = document.getElementById("testtomegindex");
let overplus = document.getElementById("sulytobblet");
let sor = document.getElementById("sor");
let csuszka1 = document.getElementById("csuszka1");
let csuszka2 = document.getElementById("csuszka2");
//csuszka1 hozzakapcsolasa az weight inputhoz
csuszka1.addEventListener("input", function() {
    weight.value = csuszka1.value;
    szamol();
});
//weight input hozzakapcsolasa az csuszka1-hez
weight.addEventListener("input", function() {
    csuszka1.value = weight.value;
    szamol();
});
//csuszka2 hozzakapcsolasa az height inputhoz
csuszka2.addEventListener("input", function() {
    height.value = csuszka2.value;
    szamol();
});
//height input hozzakapcsolasa az csuszka2-hoz
height.addEventListener("input", function() {
    csuszka2.value = height.value;
    szamol();
});

function szamol () {
    let BMI = Math.round(parseInt(weight.value)/(parseInt(height.value)/100*parseInt(height.value)/100));
    if (isNaN(BMI)) {
        return;
    }
    console.log(BMI);
    
    if (BMI <= 18) {
        index.style.background = 'yellow';
    } else {
        overplus.value =null;
        sor.classList.add("hide");
    }

    if (BMI > 18 && BMI < 25) {
        index.style.background = '#7ffc76';
    } else {
        overplus.value =null;
        sor.classList.add("hide");
    }

    if (BMI >= 25) {
        index.style.background = '#f97268';
        sor.classList.remove("hide");
        overplus.value = Math.round(parseInt(weight.value)-25*(parseInt(height.value)/100*parseInt(height.value)/100));
    }

    index.value = BMI;
}

szamol();







