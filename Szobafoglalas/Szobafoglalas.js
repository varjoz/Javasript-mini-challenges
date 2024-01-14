let vendegek_szama = document.getElementById("vendegek_szama");
let vendeg_felvetel = document.getElementById("vendeg_felvetel");

function rajz() {
    let hanyvendegkell = parseInt(select_vendegek_szama.value);
    let eddigiVendegek = document.querySelectorAll('.vendeg');
    //vendeg = mennyi vendeg kell, current = mennyi van

    let HTML = "";
    if(eddigiVendegek.length >= hanyvendegkell) {
        //itt el kell venni
        for (let i = 0; i <= eddigiVendegek.length-1; i++) {
            if(i > hanyvendegkell - 1) {
                console.log(i, eddigiVendegek[i]);
                eddigiVendegek[i].remove();
            }
        }
    } else {
        //maradekot ki kell tolteni uressel

        for (let i = eddigiVendegek.length; i < hanyvendegkell; i++) {
            HTML += `
            <fieldset class="vendeg">
                <legend>Vendeg ${i+1}</legend>
                <input type="text" name="person[${i+1}].vezeteknev" id="vezeteknev${i+1}">
                <input type="text" name="person[${i+1}].keresztnev" id="keresztnev${i+1}">
                <input type="date" name="person[${i+1}].szuletesi_ido" id="szuletesi_ido${i+1}">
            </fieldset>`
        }
        vendeg_felvetel.innerHTML += HTML;
    }
}

rajz();


