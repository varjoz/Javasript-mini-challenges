var kitoltendoek = ["nev", "lakcim", "szul_datum", "gepjarmu_tipus", "uzemanyag_egysegar", "kiindulasi_hely", "uticel", "tovabbi_uticel", "osszes_megtett_tavolsag"];
let uzemanyag_tipus = document.getElementById("uzemanyag_fajtaja");
let form = document.getElementById('form');
print_btn.setAttribute("disabled", true);

document.getElementById('szul_datum').valueAsDate = new Date();
document.getElementById('utazas_datuma').valueAsDate = new Date();


function mai_datum() {
    let datum = new Date();
    let month = datum.getUTCMonth() + 1; //months from 1-12
    let day = datum.getUTCDate();
    let year = datum.getUTCFullYear();
    let newdate = year + "." + month + "." + day;
    
    document.getElementById('mai_datum').innerHTML = newdate;
}
mai_datum();


// Az uzemanyag tipusatok fuggoen jeleniti meg a hozza tartozo select-et
function uzemanyag () {
    if (uzemanyag_tipus.value == 1) {
        console.log("1");
        dizel_norma.classList.add("hide");
        benzin_norma.classList.remove("hide");
    } else {
        console.log("2");
        benzin_norma.classList.add("hide");
        dizel_norma.classList.remove("hide");
    }
}

//Kuldes gomb
function kuldes() {
    szamol();
    var kitoltendoek = ["nev", "lakcim", "gepjarmu_tipus", "uzemanyag_egysegar", "kiindulasi_hely", "uticel", "tovabbi_uticel", "megtett_kilometer"];
    var formValid = true;
    
    kitoltendoek.forEach((mezo) => {
        if(form[mezo].value == '') {
            formValid = false;
        }
    })
    
    if(formValid) {
        kitoltendoek.forEach((i) => {
            console.log(form[i].value);  
        });
        print_btn.removeAttribute("disabled");
    } else {
      alert('Az urlap hibas!');
    }
  }

function szamol() {
    let fogyasztasi_norma_benzin = form.benzin_norma.value;
    let fogyasztasi_norma_dizel = form.dizel_norma.value;
    let uzemanyag_egysegar = form.uzemanyag_egysegar.value;
    let megtett_kilometer = form.megtett_kilometer.value;

      // utikoltseg kiszamitasa
      // útiköltség = fogyasztási_norma * üzemanyagegységár * megtett_kilométer / 100
    let utikoltseg = 0;
    if (uzemanyag_tipus.value == "1") {
        utikoltseg = Math.floor(fogyasztasi_norma_benzin*uzemanyag_egysegar*megtett_kilometer/100);
        console.log(Math.floor(utikoltseg));
    } else {
        utikoltseg = Math.floor(fogyasztasi_norma_dizel*uzemanyag_egysegar*megtett_kilometer/100);
        console.log(Math.floor(utikoltseg));
    }
    document.getElementById("utikoltseg").innerHTML = utikoltseg;

    //   amortizacio - Az autó értékcsökkenése miatt kilométerenként további 15 Ft költség számolható el.
    let amortizacio = megtett_kilometer * 15; 
    document.getElementById("amortizacio").innerHTML = amortizacio;

    //   osszes elszamolhato koltseg
    let osszes_koltseg = utikoltseg + amortizacio; 
    document.getElementById("osszes_elszamolhato_koltseg").innerHTML = osszes_koltseg;
}


