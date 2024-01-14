// Faktorialis tablazat
document.write( "<table id='tablazat' align=center cellpadding=4 width=240>" )

document.write( "<tr class='fejlec'><th> hatvány </th><th> érték </th></tr>" )

for( i=0; i<=7; i++ ) {
    if( i==0 ) {
        ertek = 1
    } else {
        ertek = ertek * i;
    }   
    document.write( "<tr><td>" +i+ "!</td> <td>" +ertek+ "</td></tr>" )
}

document.write( "<tr class='felso'><td></td><td></td></tr>" )
document.write( "</table>" )

// Aranymetszés és a Fibonacci sorozat
document.write( "<table id='tablazat' align=center cellpadding=4 width=240>" )

document.write( "<tr class='fejlec'><th>n</th><th>F(n)</th><th>F(n)/F(n-1)</th></tr>" )

var elotte1 = 1;
var elotte2 = 0;
var hanyados;
for( i=0; i<=7; i++ ) {
    var aktualis;
    if( i==0 || i ==1) {
        aktualis = i;
        hanyados = "-";
    } else {
        aktualis = elotte1 + elotte2;
        elotte2 = elotte1;
        elotte1 = aktualis;
        hanyados = aktualis/elotte2; 
    }   
    document.write( "<tr><td>" +i+ ".</td> <td>" +aktualis+ "</td> <td>" +hanyados+ "</td></tr>" )
}

document.write( "</table>" )