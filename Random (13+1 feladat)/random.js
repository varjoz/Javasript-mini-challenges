// 1. Egy évszám a XXI. század eddigi éveiből://///////////////////////////////////////////////////////////////////////////////////////////
var evszam = Math.floor(Math.random() * (2023 - 2001)) + 2001;
document.getElementById("container").innerHTML = "<br>1. Egy évszám a XXI. század eddigi éveiből<br>"+evszam;

// 2. Egy időpont a napból: ///////////////////////////////////////////////////////////////////////////////////////////////////////////////
var ora = Math.floor(Math.random() * (24 - 0));
var perc = Math.floor(Math.random() * (60 - 0));
if (ora < 10) {
    ora = "0"+ora;
}
if (perc < 10) {
        perc = "0"+perc;
    }
document.getElementById("container").innerHTML += "<br><br>2. Egy időpont a napból<br>"+ora+":"+perc;

// 3. Egy cipő ára: //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// a cipő ára drágább mint hatezer forint, és olcsóbb mint harmincezer, illetve az összeg 890-re, vagy 990-re végződik
// pelda: 20.990.-
var ezer = Math.floor(Math.random() * (29 - 6)) + 6;
var szaz = Math.floor(Math.random() * (10 - 8)) + 8;
document.write();
document.getElementById("container").innerHTML += "<br><br>3. Egy cipő ára:<br>"+ezer+"."+szaz+"90.-";

// 4. Egy totó tipposzlop: ///////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 1 X X 1 X X 1 1 2 2 1 2 2 1
function toto() {
    var tomb = [1,2,"X"];
    var HTML="";
    var tipposzlop = document.getElementById("toto_container");
    for (let i = 0; i <= 14; i++) {
        var tipp = tomb[(Math.floor(Math.random() * tomb.length))];
        HTML += `<p>${tipp}</p>`;
    }
    document.getElementById("container").innerHTML +="<br><br>4. Egy totó tipposzlop<br>"+HTML;
}
toto();


// 5. 5 db lottószám (a 90-es lottón):///////////////////////////////////////////////////////////////////////////////////////////////////
// 15 3 16 87 40
document.getElementById("container").innerHTML += "<br><br>5. 5 db lottószám (a 90-es lottón)<br>";
for (let i = 1; i <= 5; i++) {
    var lottoszam = Math.floor(Math.random() * 91);
    document.getElementById("container").innerHTML += lottoszam+" ";
}
            
            
// 6. Időpontok délelőtt 10-től este 6-ig, időrendi sorrendben:):///////////////////////////////////////////////////////////////////////
// az időpontok között legalább 15 perc, legfeljebb 120 perc lehet
// (az első időpont így nem lehet későbbi 12:00-nál)
// pelda 10:26 11:57 13:36 15:13 15:42 17:13
function idopontok(){
    var ora = Math.floor(Math.random() * (12-10)) + 10; // 10, 11 óra lehet
    var perc = Math.floor(Math.random() * 60); // 0-59 perc lehet
    document.getElementById("container").innerHTML += "<br><br>6. Időpontok délelőtt 10-től este 6-ig, időrendi sorrendben:<br>";
    document.getElementById("container").innerHTML += ora + ":" + (perc < 10 ? "0" : "") + perc + " ";
    
    console.log("Kezdo idopont: "+ora+":"+perc);
    
    for (var i=1; i<=10; i++) {
        var randomperc = Math.floor(Math.random() * (121 - 15)) + 15; // 15-120 perc között véletlenszerűen
        perc += randomperc;  // legrosszabb eset 59+119=178
        
        if (perc >= 60) {
            ora += Math.floor(perc / 60);
            perc =  perc % 60; 
        } 
        
        if (ora >= 18) {
            break;
        }
        document.getElementById("container").innerHTML += ora + ":" + (perc < 10 ? "0" : "") + perc + " ";
        console.log("Ciklus: "+i+", Random perc: "+randomperc+", ido: "+ora+":"+perc);
    }
}
idopontok();

// 7. Egy színkód, és egy annak megfelelő színű négyzet/////////////////////////////////////////////////////////////////////////////////
// pelda #775
function negyzet() {
    var HTML = "";
    var negyzet = document.getElementById("negyzet_container");
    var szin = Math.floor(Math.random() * (1000 - 100)) + 100;
    HTML += `<div class="negyzet" style="background-color: #${szin};"></div>`;
    negyzet.innerHTML = "<br>7. Egy színkód, és egy annak megfelelő színű négyzet<br>"+HTML;
}
negyzet();

// 8. 8 db színes buborék://///////////////////////////////////////////////////////////////////////////////////////////////////////////
function buborekok() {
    var HTML = "";
    var buborek = document.getElementById("buborek_container");
    buborek.innerHTML = "8. 8 db színes buborék:";
    for (let i = 0; i < 8; i++) {
        var szin = Math.floor(Math.random() * (1000 - 100)) + 100;
        HTML += `<div class="buborek" style="background-color: #${szin};"></div>`;   
    }
    buborek.innerHTML += HTML;
}
buborekok();
                
// 9. Céllövölde - legalább 3, legfeljebb 9 lövés a táblán:////////////////////////////////////////////////////////////////////////////
function cellovolde() {
    var HTML = "";
    var pontok = document.getElementById("target_container");
    var lovesekszama = Math.floor(Math.random() * (10 - 3)) + 3;
    var pirospontok = "";
    for (let i = 1; i < lovesekszama; i++) {
        var x = Math.floor(Math.random() * (402 - 3)) + 3;
        var y = Math.floor(Math.random() * (402 - 3)) + 3;
        pirospontok += `<div class="pirospont" style="top: ${y}px; left:${x}px;"></div>`;   
    }
    HTML = `<div class="picture_wrapper"><img src="Pic/celtabla.png" alt="target">${pirospontok}</div>`;
    pontok.innerHTML = "9. Céllövölde - legalább 3, legfeljebb 9 lövés a táblán:"+HTML;
}
cellovolde();
    
// 10. Jelszógenerátor, avagy 10 db véletlen karakter//////////////////////////////////////////////////////////////////////////////////
// pelda: RXWwd2BMRS
function generator() {
    document.getElementById('jelszogenerator').innerHTML = "10. Jelszógenerátor, avagy 10 db véletlen karakter<br>";
    for (let i = 1; i < 11; i++) {
        var IsCapital = Math.floor(Math.random() * 2); // random szam a kis- es nagybetu valtashoz
        var randomCharacter = Math.floor(Math.random() * 37).toString(36); //0-36 kozott szam generalas, majd atalakitas 36-os szamrendszerben
        if (randomCharacter == 10) {
            randomCharacter = "0"
        }
        if (IsCapital == 0) {
            document.getElementById('jelszogenerator').innerHTML += randomCharacter.toUpperCase();
        } else {
            document.getElementById('jelszogenerator').innerHTML += randomCharacter;
        }    
    }
}
generator();

// 11. CAPTCHA-szimulátor/////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Pl. : 4GVMO elforgatva
function captcha() {
    var HTML = "";
    var karakterek = "";
    var CAPTCHA = document.getElementById("CAPTCHA_container");
    CAPTCHA.innerHTML = "<div>11. CAPTCHA-szimulátor</div>";

    for (let i = 1; i < 6; i++) {
        var IsCapital = Math.floor(Math.random() * 2); // random capitalis
        var randomCharacter = Math.floor(Math.random() * 37).toString(36); 
        var savok = "";
                
        if (Math.random() < 0.5) {
            // Ha Math.random() kisebb, mint 0.5, akkor 0 és 30 közötti véletlen érték
            randomfok = Math.floor(Math.random() * 61); // 0 <= randomfok < 61
        } else {
            // Ha Math.random() nagyobb vagy egyenlő, mint 0.5, akkor 330 és 360 közötti véletlen érték
            randomfok = Math.floor(Math.random() * 61) + 300; // 300 <= randomfok < 361
        }
        
        if (randomCharacter == 10) {
            randomCharacter = "0"}
            if (IsCapital == 0) {
                karakterek += `<div class="karakter" style="transform: rotate(${randomfok}deg);">${randomCharacter.toUpperCase()}</div>`;
            } else {
                karakterek += `<div class="karakter" style="transform: rotate(${randomfok}deg);">${randomCharacter}</div>`;
            }    
        }
        //savok kirajzolasa
        // for (let i = 1; i < 10; i++) {
        //     savok += `<span class="savok" style="top:${i*3}px"></span>`;
        // }
        HTML += `<div class="captcha">${karakterek}${savok}</div>`;
        CAPTCHA.innerHTML += HTML;
}
captcha();
        
// 12. Kockadobás két kockával////////////////////////////////////////////////////////////////////////////////////////////////////////
function kocka(){
    var HTML = "";
    var kockak = document.getElementById("kocka_container");
    kockak.innerHTML = "<div>12. Kockadobás két kockával</div>";
    
    var random1 = Math.floor(Math.random() * (7 - 1)) + 1;
    var random2 = Math.floor(Math.random() * (7 - 1)) + 1;
    var osszeg = random1 + random2;
    
    HTML = `<div class="kockak">
    <img src="Pic/${random1}.png" alt="${random1}"></img>
    <div class="muveletijel">+</div>
    <img src="Pic/${random2}.png" alt="${random2}"></img>
    <div class="muveletijel">=</div>
    <div class="eredmeny">${osszeg}</div>
    </div>`;
    kockak.innerHTML += HTML;
}
kocka();

// 13. 5 darab francia kártya a pakliból//////////////////////////////////////////////////////////////////////////////////////////////
function kartya() {
    var HTML = "";
    var pakli = document.getElementById("pakli_container");
    var kartyak = "";   
    var shapes_array = ["clubs", "hearts", "spades", "diamonds"];
    pakli.innerHTML = "<div>13. 5 darab francia kártya a pakliból</div>";
    
    for (let i = 1; i < 6; i++) {
        var number = Math.floor(Math.random() * (14 - 1)) + 1;
        var shape = shapes_array[(Math.floor(Math.random() * shapes_array.length))];
        kartyak += `<img src="Pic/kartya/${number}_of_${shape}.png" alt="${number}_of_${shape}"></img>`
    }
    
    HTML = `<div>${kartyak}</div>`;
    pakli.innerHTML += HTML;
}
kartya();

// +1. Vándorló pont////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var HTML = "";
var vadorlo_pont = document.getElementById("vandorlo_pont_container");
vadorlo_pont.innerHTML = "+1. Vándorló pont";

HTML = `<div class="playground">
<div class="pont" id="pont"></div>
<div class="pont2" id="pont2"></div>
<div class="pont2" id="pont3"></div>
<div class="pont2" id="pont4"></div>
<div class="pont2" id="pont5"></div>
<div class="pont2" id="pont6"></div>
<div class="pont2" id="pont7"></div>
<div class="pont2" id="pont8"></div>
<div class="pont2" id="pont9"></div>
<div class="pont2" id="pont10"></div>`;
vadorlo_pont.innerHTML += HTML;

var pont = document.getElementById("pont");
var pont2 = document.getElementById("pont2");
var pont3 = document.getElementById("pont3");
var pont4 = document.getElementById("pont4");
var pont5 = document.getElementById("pont5");
var pont6 = document.getElementById("pont6");
var pont7 = document.getElementById("pont7");
var pont8 = document.getElementById("pont8");
var pont9 = document.getElementById("pont9");
var pont10 = document.getElementById("pont10");
var max_width = 20;
var max_height = 20;
var topPosition = 0;
var leftPosition = 0;

setInterval( function() {
    var IsRandomToogle = Math.floor(Math.random() * 2);
    var IsRandomToogle2 = Math.floor(Math.random() * 2);

    //X tengely
    if (IsRandomToogle > 0.5) { //menj jobbra
        if(leftPosition < max_width -1) {
            leftPosition = leftPosition + 1;} 
    } else {
        if(leftPosition > 0) { //menj balra
            leftPosition = leftPosition - 1;}
    }
    // Y tengely
    if (IsRandomToogle2 > 0.5) { //menj fel
        if(topPosition < max_height -1) {
            topPosition = topPosition + 1;} 
    } else {
        if(topPosition > 0) { //menj le
            topPosition = topPosition - 1;}
    }
    
    console.log("top: "+pont.style.top+",left: "+pont.style.left);

    //itt nyulunk bele a Pont CSS-ebe
    pont10.style.top = pont9.style.top;
    pont10.style.left = pont9.style.left;
    pont9.style.top = pont8.style.top;
    pont9.style.left = pont8.style.left;
    pont8.style.top = pont7.style.top;
    pont8.style.left = pont7.style.left;
    pont7.style.top = pont6.style.top;
    pont7.style.left = pont6.style.left;
    pont6.style.top = pont5.style.top;
    pont6.style.left = pont5.style.left;
    pont5.style.top = pont4.style.top;
    pont5.style.left = pont4.style.left;
    pont4.style.top = pont3.style.top;
    pont4.style.left = pont3.style.left;
    pont3.style.top = pont2.style.top;
    pont3.style.left = pont2.style.left;
    pont2.style.top = pont.style.top;
    pont2.style.left = pont.style.left;
    pont.style.top = topPosition*10+'px';
    pont.style.left = leftPosition*10+'px';
}, 200);


