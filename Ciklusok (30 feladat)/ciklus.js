
// 1. Számok 1-től 20-ig:///////////////////////////////////////////////////////////////////////////
document.write( '1. Számok 1-től 20-ig <br>' )
for( i=0; i<=10; i=i+1 )
{
    document.write( i, ' ' )
}
document.write("<br><br>")

// 2. Páros számok 2-től 30-ig::////////////////////////////////////////////////////////////////////
// 2 4 6 8 10 ... ... ... 28 30
document.write( '2. Páros számok 2-től 30-ig <br>' )
for( i=2; i<=30; i=i+2 )
{
    document.write( i, ' ' )
}
document.write("<br><br>")

// 3. Számok 30-től 100-ig, hetesével:://///////////////////////////////////////////////////////////
// 30 37 44 51 ... ... ... 93 100
document.write( '3. Számok 30-től 100-ig, hetesével <br>' )
for( i=30; i<=100; i=i+7 )
{
    document.write( i, ' ' )
}
document.write("<br><br>")

// 4. Számok 112-től 2-ig, tizenegyesével lefelé:://////////////////////////////////////////////////
// 112 101 90 ... ... ... 24 13 2
document.write("4. Számok 112-től 2-ig, tizenegyesével lefelé <br>")
for( i=112; i>=2; i=i-11 )
{
    document.write( i, ' ' )
}
document.write("<br><br>")

// 5. Számok -90-től 90-ig, tizenötösével:://///////////////////////////////////////////////////////
// // -90 -75 ... -15 0 15 ... 75 90
document.write("5. Számok -90-től 90-ig, tizenötösével<br>")
for( i=-90; i<=90; i=i+5 )
{
    document.write( i, ' ' )
}
document.write("<br><br>")

// 6. Azok a kétjegyű számok, amelyek számjegyeinek összege 10::////////////////////////////////////
// 19 28 37 46 55 ... ... ... 91
document.write("6. Azok a kétjegyű számok, amelyek számjegyeinek összege 10<br>")
for( i=19; i<=91; i=i+9 )
{
    document.write( i, ' ' )
}
document.write("<br><br>")

// 7. Pozitív egész számpárok, ahol a két szám összege 18:://///////////////////////////////////////
// 1-17 2-16 3-15 ... ... ... 8-10 9-9
document.write("7. Pozitív egész számpárok, ahol a két szám összege 18<br>")
for( i=1; i<=9; i=i+1 )
{
        document.write( i, '-', 18-i, ', ' )
    }
document.write("<br><br>")

// 8. A 8-as szorzótábla:://////////////////////////////////////////////////////////////////////////
// 1 * 8 =  8
// 2 * 8 = 16
// 3 * 8 = 24
// 4 * 8 = 32
// 5 * 8 = 40
// 6 * 8 = 48
// 7 * 8 = 56
// 8 * 8 = 64
// 9 * 8 = 72
// 10 * 8 = 80
document.write("8. A 8-as szorzótábla<br>")
for( i=1; i<=9; i=i+1 )
{
        document.write( i, '*', 8, '=', i*8, '<br>' )
    }
document.write("<br>")

// 9. Az első 15 pozitív egész szám négyzete:://///////////////////////////////////////////////////
// 1 4 9 16 25 ... 169 196 225
document.write("9. Az első 15 pozitív egész szám négyzete<br>")
for( i=1; i<=15; i=i+1 )
{
    document.write( i*i, ', ')
}
document.write("<br><br>")

// 10. A elkövetkezendő nem szökőévek 2041-ig::////////////////////////////////////////////////////
// // 2022 2023 2025 2026 ... 2039 2041
document.write("10. A elkövetkezendő nem szökőévek 2041-ig<br>")
for( i=2022; i<=2041; i=i+1 )
{
        if (i % 4 != 0) {
                document.write(i, " ")
            }
        }
document.write("<br><br>")

// 11. A  144  összes osztója::////////////////////////////////////////////////////////////////////
// 1 2 3 4 6 ... ... ... 72 144
document.write("11. A  144  összes osztója<br>")
for( i=1; i<=144; i=i+1 )
{ 
    if (144 % i == 0) {
            document.write(i, " ")
        }
}
document.write("<br><br>")

// 12. A 2 hatványai:://///////////////////////////////////////////////////////////////////////////
// 1 2 4 8 16 32 64 ... 1048576
document.write("12. A 2 hatványai<br>")
for( i=1; i<=20; i=i+1 )
{ 
            let x = Math.pow(2, i);
            document.write(x, " ")
    }
document.write("<br><br>")

// 13. Mindig 1-gyel nagyobb különbség::///////////////////////////////////////////////////////////
// 1 2 4 7 11 16 22 29 ... 301
document.write("13. Mindig 1-gyel nagyobb különbség<br>");
var x = 1;
document.write(x, " ");

for (let i = 1; x <= 277; i++) {
        x = x + i;
        document.write(x, " ");
    }
document.write("<br><br>")

// 14. Az előző két szám összege:://///////////////////////////////////////////////////////////////
// 1 2 3 5 8 13 21 34 ... 4181
document.write("14. Az előző két szám összege<br>")
let a = 1;
let b = 2;
document.write(a, " ", b, " ");
for (let i = 1; b < 4181; i++) {
    x = a+b;
    document.write(x, " ");
    a = b;
    b = x; 
}
document.write("<br><br>")

// 15. 9 időpont óránként, reggel negyed 9-től::///////////////////////////////////////////////////
// 08:15 09:15 10:15 ... ... ... 16:15
document.write("15. 9 időpont óránként, reggel negyed 9-től<br>")
for (let i = 8; i <= 16; i++) {
    if (i < 10) {
        document.write("0",i,":15 ");
    } else {
        document.write(i,":15 ");
    }
}
document.write("<br><br>")

// 16. Időpontok 20 percenként, délelőtt::////////////////////////////////////////////////////////
// // 08:00 08:20 08:40 ... ... ... 12:00
document.write("16. Időpontok 20 percenként, délelőtt<br>")
for (let i = 8; i<= 12; i++) {
        if (i < 10) {
                document.write("0",i,":00 ");
                document.write("0",i,":20 ");
                document.write("0",i,":40 ");
            } else {
                    document.write(i,":00 ");
                    document.write(i,":20 ");
                    document.write(i,":40 ");
                }
            }
document.write("<br><br>")

// 17. Napi menetrend, 50 percenként induló járatokkal:://///////////////////////////////////////
// 08:00
// 08:50
// 09:40
// ...
// ...
// 18:00

/*
08:00 = 480p
08:50 = 530p
09:40 = 580p
10:30 = 630p
11:20 = 680p
...
18:00 = 1080p
*/
document.write("17. Napi menetrend, 50 percenként induló járatokkal<br>")
var ora = 0;
var perc = 0;
for (let i = 480; i<= 1080; i+=50) {
        if (i < 630) {
                ora= Math.floor(i / 60);
                perc= i % 60;
                if (perc == 0) {
                        document.write("0",ora,":", perc,"0", "<br>");
                    } else {
                            document.write("0",ora,":", perc, "<br>");
                        }
                    } else {
                            ora= Math.floor(i / 60);
                            perc= i % 60;
                            if (perc == 0) {
                                    document.write(ora,":", perc,"0", "<br>");
                                } else {
                                    document.write(ora,":", perc, "<br>");
                                    }
                                }
                            }
document.write("<br><br>")


// 18. Csengetési rend sorszámmal, 45 perces tanórákkal, 10 perces szünetekkel::////////////////
// 1. 08:30-09:15  // 510-555
// 2. 09:25-10:10  // 565-610
// 3. 10:20-11:05  // 620-665
// ...
// 8. 14:55-15:40  // 895-940
document.write("18. Csengetési rend sorszámmal, 45 perces tanórákkal, 10 perces szünetekkel<br>")

var kezdo_ora = 0;
var kezdo_perc = 0;
var vegso_ora = 0;
var vegso_perc = 0;
var kezdo_sorszam = 0;
var ora_sorszam = 1;
for (kezdo_sorszam = 510; kezdo_sorszam <= 895; kezdo_sorszam += 45) {
    kezdo_ora = Math.floor(kezdo_sorszam / 60);
    kezdo_perc = kezdo_sorszam % 60;
    vegso_ora = Math.floor((kezdo_sorszam+45) / 60);
    vegso_perc = (kezdo_sorszam + 45) % 60;
    document.write(ora_sorszam,". ", kezdo_ora,":", kezdo_perc," - ", vegso_ora, ":", vegso_perc, "<br>");
    kezdo_sorszam +=10;
    ora_sorszam += 1;
}
document.write("<br><br>")

// 19. Lottószelvény:///////////////////////////////////////////////////////////////////////////
// 1	2	3	4	5	6	7	8	9	10
// 11	12	13	14	15	16	17	18	19	20
// 21	22	23	24	25	26	27	28	29	30
// 31	32	33	34	35	36	37	38	39	40
// 41	42	43	44	45	46	47	48	49	50
// 51	52	53	54	55	56	57	58	59	60
// 61	62	63	64	65	66	67	68	69	70
// 71	72	73	74	75	76	77	78	79	80
// 81	82	83	84	85	86	87	88	89	90
document.write("19. Lottószelvény<br>")
document.write("<table class='lotto'><tr align=center>")
for( j=1 ; j<=90; j++ ) {
        document.write("<td>"+j+"</td>");
        if(j%10==0) {
                document.write("</tr></tr>")    
            }
        }
document.write("</tr></table>")    
document.write("<br><br>")


// 20. E havi naptár:///////////////////////////////////////////////////////////////////////////
//                 1	2	3
// 4	5	6	7	8	9	10
// 11	12	13	14	15	16	17
// 18	19	20	21	22	23	24
// 25	26	27	28	29	30

// adjuk meg , h hany ures cella van a honap kezdonajaig (peldaul szeptember = 4 ures cellaval kezododik, oktober = 6 ures cellaval kezododik)
// Január: 6 üres cella (mivel január 1. vasárnapra esik)
// Február: 2 üres cella (mivel február 1. szerdára esik)
// Március: 2 üres cella (mivel március 1. szerdára esik)
// Április: 5 üres cella (mivel április 1. szombatra esik)
// Május: 7 üres cella (mivel május 1. hétfőre esik)
// Június: 3 üres cella (mivel június 1. csütörtökre esik)
// Július: 5 üres cella (mivel július 1. szombatra esik)
// Augusztus: 1 üres cella (mivel augusztus 1. keddre esik)
// Szeptember: 4 üres cella (mivel szeptember 1. péntekre esik)
// Október: 6 üres cella (mivel október 1. vasárnapra esik)
// November: 2 üres cella (mivel november 1. szerdára esik)
// December: 4 üres cella (mivel december 1. péntekre esik)


// adjuk meg, h hany napos a honap
// Január: 31 nap
// Február: 28 nap (2023 nem szökőév)
// Március: 31 nap
// Április: 30 nap
// Május: 31 nap
// Június: 30 nap
// Július: 31 nap
// Augusztus: 31 nap
// Szeptember: 30 nap
// Október: 31 nap
// November: 30 nap
// December: 31 nap

document.write("20. E havi naptár<br>")
var ures = 4;
var napokszama = 30;
document.write("<table class='naptar'>")

for (j=1; j<=napokszama+ures; j++) {
    if (j<=ures) {
        document.write("<td></td>");
    } 
    else {
        if(j%7==6) {
            document.write("<td><div class='naptar-cella szombat'>"+(j-ures)+"</div></td>");
        } else {
            if(j%7==0) {
                document.write("<td><div class='naptar-cella vasarnap'>"+(j-ures)+"</div></td>");
                document.write("</tr></tr>")    
            } else {
                document.write("<td><div class='naptar-cella'>"+(j-ures)+"</div></td>");
            }
        }
    }
}
document.write("</table>")   
document.write("<br><br>")

// 21. Szürke színkódok: ///////////////////////////////////////////////////////////////////////
// #000 #111 ... #999 #aaa ... #fff
document.write("21. Szürke színkódok<br>")

for (i=0; i<=15; i++) {
    document.write("#"+(i).toString(16).repeat(3)+" ");
}
document.write("<br><br>")

//22. A szürke ötven árnyalata://///////////////////////////////////////////////////////////////
document.write("22. A szürke ötven árnyalata<br>")
for (i=8; i<=204; i+=4) {
        document.write("<div class='graybox' style='background-color: rgb("+i+","+i+","+i+")'></div>")
    }
document.write("<br><br>")

// 23. Zöldek://////////////////////////////////////////////////////////////////////////////////
// #102000
// #204000
// #306000
// #408000
// #50a000
// #60c000
// #70e000
document.write("23. Zöldek<br>")
var hex = 2;
var color = "";
for (var dec=1; dec<=7; dec++) {
        hex = (dec*2).toString(16);
        color = "#"+dec+"0"+hex+"000";
        // document.write(color)
        document.write("<div class='greenbox' style='background-color: "+color+"'></div>");
    }
document.write("<br><br>")

// 24. Orgonasíp-elrendezés/////////////////////////////////////////////////////////////////////
function orgonasip() {
    var orgona = document.getElementById("whistle_container"); 
    var HTML = "";
    
    for (var tall = 8; tall<= 200; tall+=4) {
        HTML += `<div class="whistle" style="height: ${tall}px;"></div>`
    }
    for (var tall = 200; tall>= 8; tall-=4) {
        HTML += `<div class="whistle" style="height: ${tall}px;"></div>`
    }
    orgona.innerHTML = "<div>24. Orgonasíp-elrendezés<br></div>"+HTML; 
}
orgonasip();
        
        
// 25. Növekvő és világosodó körök, 4px-től 40px-es átmérőig:///////////////////////////////////
function korok () {
    var HTML = "";
    var circles = document.getElementById("circles_container"); 
    var r = 0, g = 1, b = 1;
    for (var i = 1; i<= 10; i++) {
        var b16 = (b+i).toString(16);
        if(i%2 !=0 && i > 1) {
            g++;
        }
        HTML += `<div class="circle" style="width: ${i*4}px; height: ${i*4}px; background-color: #${r}${g}${b16};"></div>`
    }
    circles.innerHTML = "25. Növekvő és világosodó körök, 4px-től 40px-es átmérőig<br>"+HTML; 
}
korok();


// 26. Számjegyek képpel:://////////////////////////////////////////////////////////////////////
function szamjegyek () {

    var HTML = "";
    var circles = document.getElementById("numbers_container"); 
    
    for (var number = 0; number<= 9; number++) {
        HTML += `<img src="szamok/${number}.gif" alt="${number}">`
    }
    circles.innerHTML = "26. Számjegyek képpel<br>"+HTML; 
}
szamjegyek();

// 27. Számok képpel 1-től 31-ig: ///////////////////////////////////////////////////////////////
function szamjegyek2 () {

    var HTML = "";
    var numbers = document.getElementById("numbers2_container");
    
    for (var i = 1; i <= 31; i++) {
        var formattedNumber = ""; 
        if (i<10) { 
            formattedNumber = "0" + i
        } else {
            formattedNumber = i.toString()
        };
        var x = formattedNumber[0];
        var y = formattedNumber[1];
        HTML += `<div class="numbers"><img src="szamok/${x}.gif" alt="${x}"><img src="szamok/${y}.gif" alt="${y}"></div>`
        
    }
    numbers.innerHTML = "27. Számok képpel 1-től 31-ig<br>"+HTML;
    console.log(x);
}
szamjegyek2();

// 28. Céltábla ////////////////////////////////////////////////////////////////////////////////
function celtabla() {

    var HTML = "";
    var target = document.getElementById("target_container");

for (i=10; i>=1; i--) {
    if (i == 1) {
        HTML += `<div class="kor bg_feher" style="width: ${i*35}px; height: ${i*35}px;">
        <div class="celtabla_szam kozep">${11-i}</div>
        </div>`
    } else {
        if (i<=4) {
            HTML += `<div class="kor bg_fekete" style="width: ${i*35}px; height: ${i*35}px;">
            <div class="celtabla_szam felso">${11-i}</div>
            <div class="celtabla_szam jobb">${11-i}</div>
            <div class="celtabla_szam also">${11-i}</div>
            <div class="celtabla_szam bal">${11-i}</div>
            </div>`
        } else {
            HTML += `<div class="kor bg_feher" style="width: ${i*35}px; height: ${i*35}px;">
            <div class="celtabla_szam felso">${11-i}</div>
            <div class="celtabla_szam jobb">${11-i}</div>
            <div class="celtabla_szam also">${11-i}</div>
            <div class="celtabla_szam bal">${11-i}</div>
            </div>`
        }
    }
}
target.innerHTML = "28. Céltábla"+HTML;
}
celtabla();

// 29. Óra számlap: //////////////////////////////////////////////////////////////////////////////
// 1 radian = 57,345 fok
function oraszamlap() {
    var HTML = "";
    var x;
    var y;
    var szamok = '';
    var pontok = '';
    var clock = document.getElementById("clock_container");
    
    for (let i = 1; i <= 60; i++) {
        var fok = -90 + i * 6;
        if (fok % 30 == 0) {
            // Sotet pontok pozíciójának kiszámítása a körön belül
            x = 150 + 140 * Math.cos(fok * Math.PI / 180);
            y = 150 + 140 * Math.sin(fok * Math.PI / 180);
            pontok += `<div class="sotetpont" style="top: ${y}px; left: ${x}px;"></div>`;
            // Számok pozíciójának kiszámítása a körön belül
            x = 150 + 123 * Math.cos(fok * Math.PI / 180);
            y = 150 + 123 * Math.sin(fok * Math.PI / 180);
            szamok += `<div class="szam" style="top: ${y}px; left: ${x}px;">${i/5}</div>`;
        } else {
            // Vilagos pontok pozíciójának kiszámítása a körön belül
            x = 150 + 140 * Math.cos(fok * Math.PI / 180);
            y = 150 + 140 * Math.sin(fok * Math.PI / 180);
            pontok += `<div class="vilagospont" style="top: ${y}px; left: ${x}px;"></div>`;
        } 
    }
    
    HTML += `
    <div class="nagykor" style="width: 300px; height: 300px;">
    <div class="kiskor" style="width: 30px; height: 30px;"></div>
    ${pontok}${szamok}
    </div>`;
    
    clock.innerHTML = "29. Óra számlap"+HTML;
}
oraszamlap();
    
// 30. Csigavonal://////////////////////////////////////////////////////////////////////////////
function csigavonal() {
    var HTML = "";
    var csigavonal = document.getElementById("spiral_container");
    var x;
    var y;
    
    for (let i = 0; i <= 1000; i++) {
        var fok =i*2;
        // Pontok pozíciójának kiszámítása a körön belül
        // Kozeppont koordinatak + tavolsag a kozepponttol * radius 
        x = 350 + i/6 * Math.cos(fok * Math.PI / 180);
        y = 150 + i/6 * Math.sin(fok * Math.PI / 180);
        HTML += `<div class="pont" style="top: ${y}px; left: ${x}px;"></div>`;
    }
    
    csigavonal.innerHTML = "30. Csigavonal<br>"+HTML;
}
csigavonal();
    



