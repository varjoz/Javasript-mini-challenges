// Húsvét és pünkösd - Az ünnepnapok dátumának meghatározása
// Húsvét vasárnapja március 22. és április 25. között van. 
// Jelölje T az évszámot (1901<=T<=2099). Kiszámítjuk a következő osztási maradékokat:
var T = 2023;
// A = T / 19 maradéka
var A = T%19;
// B = T / 4 maradéka
var B = T%4;
// C = T / 7 maradéka
var C = T%7;
// D = (19A+24) / 30 maradéka
var D = (19*A+24)%30;
// E = (2B+4C+6D+5) / 7 maradéka.
var E = (2*B+4*C+6*D+5)%7;
// Ezekből a húsvét-vasárnap dátuma H=22+D+E, ami márciusi dátum, ha H<=31, különben áprilisban H-31. 
var H = 22+D+E;

if (1901<=T && T<=2099) {
    // Azonban létezik két kivétel: ha E=6 és D=29, akkor H=50, 
    if (E == 6 && D == 29) {
        H=50;
    }
    // illetve ha E=6 és D=28 és A>10, akkor H=49. 
    if (E==6 && D==28) {
        H=49;
    }
    if (H <= 31) {
        console.log("Marcius " + H);
        var husvet_datuma = new Date();
        husvet_datuma.setFullYear(T, 2, H);
        console.log("husvet datum: " + husvet_datuma);
        document.write(T+" evben Husvet napja: 03. " + H + ".<br>" );
        
        // Pünkösd minden évben húsvét után hét héttel következik. 
        var punkosd_napja = structuredClone(husvet_datuma);
        addWeeks(punkosd_napja, 7);
        console.log("punkosd napja: " + punkosd_napja);
        document.write(`${T} evben Punkosd napja: 0${punkosd_napja.getMonth() + 1}. ${punkosd_napja.getDate()}.  <br>`);
    } else {
        H = H-31;
        console.log("aprilis "+ H);
        var husvet_datuma = new Date();
        husvet_datuma.setFullYear(T, 3, H);
        console.log("husvet datum: " + husvet_datuma);
        document.write(T+" evben Husvet napja: 04. " + H + ".<br>" );
        
        // Pünkösd minden évben húsvét után hét héttel következik. 
        var punkosd_napja = structuredClone(husvet_datuma);
        addWeeks(punkosd_napja, 7);
        console.log("punkosd napja: " + punkosd_napja);
        document.write(`${T} evben Punkosd napja: 0${punkosd_napja.getMonth() + 1}. ${punkosd_napja.getDate()}.  <br>`);    } 
}

function addWeeks(date, weeks) {
    date.setDate(date.getDate() + 7 * weeks);
    return date;
}
