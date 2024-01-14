// Szintabla piros, zold ////////////////////////////////////////////////////////////////////////////////////////////////////////////

// document.write( "<table align=center id='szintabla'>" )
// var g = 0;

// for( i=0; i<=15; i++ ) //sor // g novekszik
// {
//     var r = 0;
//     var r_hex = " ";
//     var g_hex = " ";

//     document.write( "<tr>" );
//     if (g == 0) {
//         g_hex = "00";
//     } else {
//         g_hex = g.toString(16);
//     }

//     for( j=0; j<=15; j++ ) //oszlopok alapjan a cellak // r novekszik
//     {
//         if (r == 0) {
//             r_hex = "00";
//         } else {
//             r_hex = r.toString(16);
//         }   
//         var color = "#"+r_hex+g_hex+"00";
//         document.write( `<td width='5%' class="szines-doboz-R-G" style="background-color: ${color}" ></td>` );
//         // console.log("Sor: "+i+", Oszlop: "+j+", R: "+r+", G: "+g+", B: 00");
//         r +=17;
//     }
//     g += 17;
//     document.write( "</tr>" );
// }
// document.write( "</table>" );




// Szintabla piros, zold, kek ////////////////////////////////////////////////////////////////////////////////////////////////////
var r = 0;
var g = 0;
var b = 0;
var html = "<table align=center id='szintabla'>";
for(var i = 0; i < 16; i++) {
    html+="<tr>";
    r = 0;
    b = 0;
    for(var j = 0; j < 48; j++) {
        html += rajzol(r,g,b);
        if(j < 15) {
            r+= 17;
        } else if (j > 15 && j < 32) {
            b+=17;
        } else {
            r-= 17;
        }
    }
    html+="</tr>";
    g+= 17; //egy nagysagrendi noveles a 16. szamrendszer miatt
}
html +="</table>"
document.write(html);

function rajzol(r,g,b, isPici) {
    var dobozClass = 'szines-doboz-R-G';
    if(isPici) {
        dobozClass += ' doboz-pici';
    }
    var szin = r+","+g+","+b;
    return `<td class="${dobozClass}" style="background-color: rgb(${szin})">&nbsp;</td>`;    
}

/*
document.write( "<table align=center id='szintabla'>" )
var g = 0;
for( i=0; i<=15; i++ ) {
    var r = 0;
    var b = 0;
    var r_hex = " ";
    var g_hex = " ";
    var b_hex = " ";
    var color = " ";

    document.write( "<tr>" );
    if (g == 0) {
        g_hex = "00";
    } else {
        g_hex = g.toString(16);
    }
    console.log("g ehx erteke ebben a sorban" +g_hex, g);
    
    for( j=0; j<=31; j++ ) //oszlopok alapjan a cellak // r novekszik
        { 
        if (j <= 15) {
            if (r == 0) {r_hex = "00";} else {r_hex = r.toString(16);}
            b_hex = "00";
            color = "#"+r_hex+g_hex+b_hex;
            document.write( `<td width='5%' class="szines-doboz-R-G-B" style="background-color: ${color}" ></td>` );
            //console.log("Sor: "+i+", Oszlop: "+j+", R: "+r_hex+", G: "+g_hex+", B: 00");
            r +=17;
        } else { //b novekszik a 16. sortol  
            if (b == 0) {b_hex = "00";} else {b_hex = b.toString(16);} 
            color = "#"+r_hex+g_hex+b_hex;
            document.write( `<td width='5%' class="szines-doboz-R-G-B" style="background-color: ${color}" ></td>` );
            //console.log("Sor: "+i+", Oszlop: "+j+", R: "+r_hex+", G: "+g_hex+", B: "+b_hex);
            b +=17;
        }
    }
    
    g += 17;
    document.write( "</tr>" );
}
document.write( "</table>" );
*/


// AI///////////////////////////
// document.write("<table align=center id='szintabla'>");

// for (let i = 0; i <= 15; i++) { // sor // g növekszik
//     document.write("<tr>");

//     for (let j = 0; j <= 31; j++) { // oszlopok alapján a cellák // r növekszik
//         let r = i * 17;
//         let g = 0;
//         let b = j > 15 ? (j - 16) * 17 : 0;
        
//         let r_hex = r.toString(16).padStart(2, '0');
//         let g_hex = g.toString(16).padStart(2, '0');
//         let b_hex = b.toString(16).padStart(2, '0');
        
//         let color = "#" + r_hex + g_hex + b_hex;
        
//         document.write(`<td width='5%' class="szines-doboz-R-G-B" style="background-color: ${color}"></td>`);
//         console.log("Sor: " + i + ", Oszlop: " + j + ", R: " + r_hex + ", G: " + g_hex + ", B: " + b_hex);
//     }

//     document.write("</tr>");
// }

// document.write("</table>");
// Ebben a javított kódban a változók értékeit megfelelően számítják ki a ciklusokban, és az RGB színek létrehozása során helyesen használják ezeket az értékeket.





