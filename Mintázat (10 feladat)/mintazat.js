var HTML = "";

function alap(fuggvenynev) {
    var container = document.getElementById("container");

    HTML = "<table class='matrix' cellpadding=0>";
    for (var sor = 0; sor <= 15; sor++) {
        HTML += "<tr>";
        for (var oszlop = 0; oszlop <= 15; oszlop++) {
            HTML += "<td>";
            switch (fuggvenynev) {
                case rajzol1:
                    rajzol1(sor, oszlop);
                    break;
                case rajzol2:
                    rajzol2(sor, oszlop);
                    break;
                case rajzol3:
                    rajzol3(sor, oszlop);
                    break;
                case rajzol4:
                    rajzol4(sor, oszlop);
                    break;
                case rajzol5:
                    rajzol5(sor, oszlop);
                    break;
                case rajzol6:
                    rajzol6(sor, oszlop);
                    break;
                case rajzol7:
                    rajzol7(sor, oszlop);
                    break;
                case rajzol8:
                    rajzol8(sor, oszlop);
                    break;
                case rajzol9:
                    rajzol9(sor, oszlop);
                    break;
                case rajzol10:
                    rajzol10(sor, oszlop);
                    break;
                default:
                    break;
            }
            HTML += "</td>";
        }
        HTML += "</tr>";
    }
    HTML += "</table>";
    console.log("done");
    container.innerHTML = HTML;
}

// 1. Négyzet 16x16 pontból //////////////////////////////////////////////////////////////////////////
function rajzol1(sor, oszlop) {
    var r_hex = sor.toString(16);
    var g_hex = oszlop.toString(16);
    var color = "#" + r_hex + g_hex + "0";
    HTML += `<div class='bullet' style="background-color:${color}" ></div>`;
}

// 2.(színes) Háromszög 16x16 pontból://////////////////////////////////////////////////////////////////////////
function rajzol2(sor, oszlop) {
    if (sor >= oszlop) {
        var r_hex = "0";
        var g_hex = sor.toString(16);
        var b_hex = oszlop.toString(16);
        var color = "#" + r_hex + g_hex + b_hex;
        HTML += `<div class='bullet' style="background-color:${color}" ></div>`;
    }
}

// 3. (szines) Pöttyös://///////////////////////////////////////////////////////////////////////////////////////
function rajzol3(sor, oszlop) {
    var r_hex = (sor).toString(16);
    var r_hex2 = (16-sor).toString(16);
    var color = "#"+r_hex+"00";
    var color_back = "#"+r_hex2+"00";
    
    if (sor <= 8) {
        if ((sor % 2 == 0)) {
            if (oszlop % 2 == 1) {
                HTML += `<div class='bullet' style="background-color:${color_back}" ></div>`;     
            } 
        } else {
            if (oszlop % 2 == 0) {
                HTML += `<div class='bullet' style="background-color:${color_back}" ></div>`;
            }
        }
    } else {
        if ((sor % 2 == 0)) {
            if (oszlop % 2 == 1) {
                HTML += `<div class='bullet' style="background-color:${color}" ></div>`;     
            } 
        } else {
            if (oszlop % 2 == 0) {
                HTML += `<div class='bullet' style="background-color:${color}" ></div>`;
            }
        }
    }
}

// // 4.(szines) Zászló://///////////////////////////////////////////////////////////////////////////////////////
function rajzol4(sor, oszlop) {
    if ((sor == 7 || sor == 8) || (oszlop == 7 || oszlop == 8)) {
        HTML += "<div class='bullet fill'></div>";
    } else {
        HTML += "<div class='bullet fill2'></div>";
    }
}

// 5. (szines)Felnégyelve:://////////////////////////////////////////////////////////////////////////////////
function rajzol5(sor, oszlop) {
    if(sor >= 8) {
        sor = 15-sor;
    }
    if(oszlop >= 8) {
        oszlop = 15-oszlop;
    }
    
    var  bg = '#' + (15-oszlop - sor).toString(16).repeat(3);
    
    if ((sor + oszlop == 15) || (sor == oszlop)) {
        // atlok
    } else {      
        HTML +=`<div class='bullet' title="${bg}" style='background-color:${bg}'></div>`;
    }
}

// 6. (szines) Kereszt:///////////////////////////////////////////////////////////////////////////////////////
function rajzol6(sor, oszlop) {
    if ((oszlop == sor) // X kirajzolasa
     || (Math.abs((oszlop-sor)<=2) && ((oszlop-sor)>=-2))
     || (oszlop + sor >= 13) && (oszlop + sor <= 17)
    ) {
        if (   (((sor != 8) || (oszlop != 6)) && (Math.abs(oszlop-sor) == 2)) //    \ kirajzolas
            && (((sor != 9) || (oszlop != 7)) && (Math.abs(oszlop-sor) == 2)) // kozepso pontok eltuntetese
            && (((sor != 6) || (oszlop != 8)) && (Math.abs(oszlop-sor) == 2)) 
            && (((sor != 7) || (oszlop != 9)) && (Math.abs(oszlop-sor) == 2)) 
            || ((sor + oszlop == 13) && (sor != 6) && (sor != 7)) //  / atlo
            || ((sor + oszlop == 17) && (sor != 8) && (sor != 9)) //  / atlo
            || (Math.abs(oszlop-sor) >= 14) //bal also, jobb felso sarok
            || (sor + oszlop <= 1) // bal felso sarok
            || (sor + oszlop >= 29) // jobb also sarok
            || ((oszlop<7) && (oszlop>11) )
            ) 
            {
                HTML += "<div class='bullet fill1'>"+sor+','+oszlop+"</div>";
            } else { 
                HTML += "<div class='bullet fill'>"+sor+','+oszlop+"</div>";
        }
    } else {
            HTML += "<div class='bullet '>"+sor+','+oszlop+"</div>";
    }
}

// //7.(Szines) Rombusz::///////////////////////////////////////////////////////////////////////////////////////
function rajzol7(sor, oszlop) {

if ((sor <= 7)) {
    if ( ((oszlop + sor >= 7) && (oszlop <= 7))) {
        HTML += "<div class='bullet fill1'>"+sor+','+oszlop+"</div>";
    } else if ((oszlop - sor <= 8) && (oszlop >= 8)) {
        HTML += "<div class='bullet fill2'>" + sor + ',' + oszlop + "</div>";
    } else {
        HTML += "<div class='bullet'>"+sor+','+oszlop+"</div>";
    }
} else { // sor > 8
    if ((sor - oszlop <= 9) && (oszlop <= 7)) {
        HTML += "<div class='bullet fill2'>"+sor+','+oszlop+"</div>";
    } else  if ((sor + oszlop <= 23) && (oszlop >= 8)) {
        HTML += "<div class='bullet fill1'>"+sor+','+oszlop+"</div>";
    } else {
        HTML += "<div class='bullet'>"+sor+','+oszlop+"</div>";
    }
}
}


//8. (Szines) Csokornyakkendő::///////////////////////////////////////////////////////////////////////////////////////
function rajzol8(sor, oszlop) {
    if(oszlop >= 8) {
        oszlop = 15-oszlop;
    }
    var  bg = '#' + (10-oszlop).toString(16)+"00";
    if (sor <= 7) {
        if ((sor - oszlop >= 0) || (sor + oszlop >= 15)) {
            // document.write("<div class='bullet'>"+sor+','+oszlop+"</div>");
            HTML += `<div class='bullet' title="${bg}" style='background-color:${bg}'></div>`;
        } else {
            HTML += "<div class='bullet'></div>";
        }
    } else { //sor nagyobb mint 8
        if ((sor - oszlop <= 0) || (sor + oszlop <= 15)) {
            HTML += `<div class='bullet' title="${bg}" style='background-color:${bg}'></div>`;
        } else {
            HTML += "<div class='bullet'></div>";
        }
    }
}

// 9. (Szines) Négyzetek a négyzetben:///////////////////////////////////////////////////////////////////////////////////////
function rajzol9(sor, oszlop) {
let classes='';   
let bg='';   
if(
    //korben haromszogeket rajzol
    sor == 0 || oszlop == 0 || oszlop == 15 || sor == 16 - 1     
    || (sor%2 == 0 && oszlop < 16-sor && sor <= oszlop)
    || (sor%2 && oszlop <= sor && 15-sor <= oszlop)
    || (oszlop%2 == 0 && oszlop <= sor && sor+oszlop <= 15)    
    || (oszlop%2 != 0 && oszlop >= 16-sor && sor-oszlop <= 0)
    ) {
        classes += ' fill';
    }  
    
    if (sor == 0 || 15-sor == 0 || oszlop == 0 || 15-oszlop == 0 ) {
        bg = "f0f"
    } 

    if (   sor == 2 && oszlop >= 2 && oszlop<= 13 
        || sor == 13 && oszlop >= 2 && oszlop<= 13
        || oszlop == 2 && sor >=2 && sor <= 13
        || oszlop == 13 && sor >=2 && sor <= 13
        ) {
        bg = "b0b"
    }
    
    if (   sor == 4 && oszlop >= 4 && oszlop<= 11 
        || sor == 11 && oszlop >= 4 && oszlop<= 11
        || oszlop == 4 && sor >=4 && sor <= 11
        || oszlop == 11 && sor >=4 && sor <= 11
        ) {
        bg = "707"
    }

    if (   sor == 6 && oszlop >= 6 && oszlop<= 9 
        || sor == 9 && oszlop >= 6 && oszlop<= 9
        || oszlop == 6 && sor >=6 && sor <= 9
        || oszlop == 9 && sor >=6 && sor <= 9
        ) {
        bg = "303"
    }

HTML += `<div class="bullet ${classes} "style='background-color:#${bg}'>${sor},${oszlop}</div>`;
}  


// 10. (Szines) Fenyőfa: /////////////////////////////////////////////////////////////////////////////////////////////////
function rajzol10(sor,oszlop) {
    let classes='';   
    let bg=''; 
    var bal_magassag = 14-oszlop*2;
    var jobb_magassag = Math.abs(bal_magassag)-2; 
    
    // torzs
    if (   oszlop == 7 && (sor == 14 || sor == 15)
        || oszlop == 8 && (sor == 14 || sor == 15)
    ) {
        bg = "420"
    }
    // bal oldal
    if ((oszlop <=7) && (sor >=bal_magassag) && (sor <=13)) 
    {
        bg ="0"+(15-sor).toString(16)+"0";
    }
    
    // jobb oldal   
    if ((oszlop >=8) && (sor >=jobb_magassag) && (sor <=13)) 
    {
        bg ="0"+(15-sor).toString(16)+"0";
    }
    HTML += `<div class="bullet ${classes} "style='background-color:#${bg}'>${sor},${oszlop}</div>`;
}






