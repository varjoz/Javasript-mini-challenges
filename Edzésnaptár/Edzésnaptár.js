// Edzésnaptár - Mikor mi lesz?
// Egy testépítő sportoló napi edzései során minden alkalommal más izomcsoportra edz - tehát egy napon mindig csak egyre. Összességében négy edzésnapot váltogat folyamatosan az alábbi sorrendben:
//      váll- és hátedzés,
//      karedzés,
//      melledzés,
//      lábedzés.
// Minden harmadik edzésnap után, vagyis a negyedik napon pihenőnapot tart, majd az ötödik napon a fenti sorrend által meghatározott edzéssel folytat (tehát a pihenőnap nem jelent kihagyást, csak csúszást az edzésprogramok között).
// Készítsen programot, mely elkészíti a sportoló számára a következő 30 nap edzésnaptárát táblázatos formában, a konkrét dátumok feltüntetésével, ha adott, hogy ma épp pihenőnap van, és holnap lábedzés következik. Mintaként tekintse az alábbi ábrát:

// dátum	edzés
// 10.11.	---
// 10.12.	láb
// 10.13.	váll
// 10.14.	kar
// 10.15.	---
// 10.16.	mell
// 10.17.	láb
// 10.18.	váll

// napnev = new Array( "vasárnap" , "hétfő" , "kedd" , "szerda" , "csütörtök" , "péntek" , "szombat" );
var edzesek = new Array("váll", "kar", "mell", "láb" );
var edzesnaptar = document.getElementById("edzesnaptar")
var most = new Date();
var honap = most.getMonth();
var nap = most.getDate(); 
var edzes_index = 0;
var html = `
    <tr>
        <th>dátum</th>
        <th>edzés</th>
    </tr>`;

for (var  i = 1; i <= 30; i++) {
    var className = '';
    var nap_sorszam = new Date();
    nap_sorszam.setDate(nap);
    var hanyadik_nap = nap_sorszam.getDay();
    
    var mai_program = '';
    if (i == 1 || i%5 ==0) {
        mai_program = "--"
        // console.log("Ez egy pihenonap " + nap);
    } else {
        mai_program = edzesek[edzes_index];
        if (edzes_index < edzesek.length-1) {
            edzes_index++;
        } else {
            edzes_index = 0;
        }
    }

    if (hanyadik_nap == 6) { // szombat
        className += 'szombat';
    }
    if (hanyadik_nap == 0) { // vasarnap
        className += 'vasarnap';
    }
    html += `
    <tr class="${className}">
        <td> ${honap+1}.${nap} </td>
        <td> ${mai_program} </td>
    </tr>`;
    //a hónap napjainak számát a Date objektum segítségével határozzuk meg
    var haviNapokSzama = new Date(most.getFullYear(), honap + 1, 0).getDate();
    if (nap >= haviNapokSzama) {
        nap = nap % haviNapokSzama;
        honap++;
    }
    nap++;
}

edzesnaptar.innerHTML = html;

//november napjait nem helyesen szinezi

