// // Húsvét és pünkösd - Az ünnepnapok dátumának meghatározása
// // Húsvét vasárnapja március 22. és április 25. között van. 
// // Jelölje T az évszámot (1901<=T<=2099). Kiszámítjuk a következő osztási maradékokat:
// var T = 2023;
// // A = T / 19 maradéka
// var A = T%19;
// // B = T / 4 maradéka
// var B = T%4;
// // C = T / 7 maradéka
// var C = T%7;
// // D = (19A+24) / 30 maradéka
// var D = (19*A+24)%30;
// // E = (2B+4C+6D+5) / 7 maradéka.
// var E = (2*B+4*C+6*D+5)%7;
// // Ezekből a húsvét-vasárnap dátuma H=22+D+E, ami márciusi dátum, ha H<=31, különben áprilisban H-31. 
// var H = 22+D+E;

// if (1901<=T && T<=2099) {
//     // Azonban létezik két kivétel: ha E=6 és D=29, akkor H=50, 
//     if (E == 6 && D == 29) {
//         H=50;
//     }
//     // illetve ha E=6 és D=28 és A>10, akkor H=49. 
//     if (E==6 && D==28) {
//         H=49;
//     }
//     if (H <= 31) {
//         console.log("Marcius " + H);
//         var husvet_datuma = new Date();
//         husvet_datuma.setFullYear(T, 2, H);
//         console.log("husvet datum: " + husvet_datuma);
//         document.write(T+" evben Husvet napja: 03. " + H + ".<br>" );
        
//         // Pünkösd minden évben húsvét után hét héttel következik. 
//         var punkosd_napja = structuredClone(husvet_datuma);
//         addWeeks(punkosd_napja, 7);
//         console.log("punkosd napja: " + punkosd_napja);
//         document.write(`${T} evben Punkosd napja: 0${punkosd_napja.getMonth() + 1}. ${punkosd_napja.getDate()}.  <br>`);
//     } else {
//         H = H-31;
//         console.log("aprilis "+ H);
//         var husvet_datuma = new Date();
//         husvet_datuma.setFullYear(T, 3, H);
//         console.log("husvet datum: " + husvet_datuma);
//         document.write(T+" evben Husvet napja: 04. " + H + ".<br>" );
        
//         // Pünkösd minden évben húsvét után hét héttel következik. 
//         var punkosd_napja = structuredClone(husvet_datuma);
//         addWeeks(punkosd_napja, 7);
//         console.log("punkosd napja: " + punkosd_napja);
//         document.write(`${T} evben Punkosd napja: 0${punkosd_napja.getMonth() + 1}. ${punkosd_napja.getDate()}.  <br>`);    } 
// }

// function addWeeks(date, weeks) {
//     date.setDate(date.getDate() + 7 * weeks);
//     return date;
// }


napnev   = new Array( "vasárnap" , "hétfő" , "kedd" , "szerda" , "csütörtök" , "péntek" , "szombat" )

most = new Date();
ev   = most.getFullYear();
console.log(most);
console.log(ev);

januar1 = new Date( ev, 1-1, 1 );
januar1_nap   = januar1.getDay();
document.write("<p>Januar 1 az idén <b>" +napnev[januar1_nap]+ "</b> lesz." );

marcius15 = new Date( ev, 3-1, 15 );
marcius15_nap   = marcius15.getDay();
document.write("<p>Marcius 15 az idén <b>" +napnev[marcius15_nap]+ "</b> lesz." );

majus1 = new Date( ev, 5-1, 1 );
majus1_nap   = majus1.getDay();
document.write("<p>Majus 1 az idén <b>" +napnev[majus1_nap]+ "</b> lesz." );

augusztus20 = new Date( ev, 8-1, 20 );
augusztus20_nap   = augusztus20.getDay();
document.write("<p>Augusztus 20 az idén <b>" +napnev[augusztus20_nap]+ "</b> lesz." );

oktober23 = new Date( ev, 10-1, 23 );
oktober23_nap   = oktober23.getDay();
document.write("<p>Oktober 23 az idén <b>" +napnev[oktober23_nap]+ "</b> lesz." );

november1 = new Date( ev, 11-1, 1 );
november1_nap   = november1.getDay();
document.write("<p>November 1 az idén <b>" +napnev[november1_nap]+ "</b> lesz." );

december24 = new Date( ev, 12-1, 24 );
december24_nap   = december24.getDay();
document.write("<p>December 24 az idén <b>" +napnev[december24_nap]+ "</b> lesz." );

szilveszter = new Date( ev, 12-1, 31 );
szilv_nap   = szilveszter.getDay();
document.write("<p>Szilveszter az idén <b>" +napnev[szilv_nap]+ "</b> lesz." );












