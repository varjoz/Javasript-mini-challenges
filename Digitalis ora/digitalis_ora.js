// Mintapélda ///////////////////////////////////////////////////////////////////////////////////////

// napnev = new Array( "vasárnap" , "hétfő" , "kedd" , "szerda" , "csütörtök" , "péntek" , "szombat" )

// function frissit()
// {
//     most = new Date()

//     ev   = most.getFullYear()
//     ho   = most.getMonth()+1		// mert 0-tól 11-ig sorszámozza a hónapokat
//     nap  = most.getDate()
//     ssz  = most.getDay()

//     hrs  = most.getHours()
//     min  = most.getMinutes()
//     sec  = most.getSeconds()


//     if( ho  < 10 )   ho  = "0" + ho
//     if( nap < 10 )   nap = "0" + nap
//     if( hrs < 10 )   hrs = "0" + hrs
//     if( min < 10 )   min = "0" + min
//     if( sec < 10 )   sec = "0" + sec


//     kijelzo1.innerHTML = hrs + ":" + min + ":" + sec
//     kijelzo2.innerHTML = ev  + "." + ho  + "." + nap + "<br>" + napnev[ssz]
// }

// setInterval('frissit()',1000)
// frissit()




// Kiegeszites ///////////////////////////////////////////////////////////////////////////////////////
// function pont_torles()
// {
//     // A kettőspont csak fél másodpercig látható. 
//     // 500 millisec után fekete képpel helyettesítjük. Ettől villog. 
//     document.getElementById('kijelzo').getElementsByTagName('img')[2].src = "./digit/blank.gif" 
// }


// function frissites()
// {
//     most = new Date()
    
//     hrs  = most.getHours()
//     min  = most.getMinutes()
//     sec  = most.getSeconds()

//     h1 = "digit/" + parseInt(hrs/10) + "PDG.gif"  ;    //A parseInt() - string számmá alakításra használunk.
//     h2 = "digit/" + hrs%10 + "PDG.gif" ;
//     m1 = "digit/" + parseInt(min/10) + "PDG.gif"  ;   
//     m2 = "digit/" + min%10 + "PDG.gif";
//     s1 = "digit/" + parseInt(sec/10) + "PDG.gif"  ;
//     s2 = "digit/" + sec%10 + "PDG.gif" 

//     if(hrs<10)   h1 = "digit/blank.gif"    // Ha az óra első számjegye 0, akkor fekete képpel helyettesítjük. 

//     kijelzo.innerHTML  = "<img src=" + h1 + "><img src=" + h2 + "><img src=digit/cPDG.gif>" 
//     kijelzo.innerHTML += "<img src=" + m1 + "><img src=" + m2 + "><img src=digit/blank.gif>" 
//     kijelzo.innerHTML += "<img src=" + s1 + "><img src=" + s2 + ">" 

//     setTimeout('pont_torles()',500)

// }

// setInterval('frissites()',1000)
// frissites()



// Viszzafele szamolo ora////////////////////////////////////////////////////////////////////////////

// function frissites() {
//     var html = '';
//     var most = new Date()
//     var hrs  = most.getHours()
//     var min  = most.getMinutes()
//     var sec  = most.getSeconds()
//     var min_left = 45-min;
//     var ora_sorszam = hrs%8;
//     var nap_sorszam = new Date().getDay();

//     if( hrs < 10 ) {hrs = "0" + hrs}
//     if( min < 10 ) {min = "0" + min}
//     if( sec < 10 ) {sec = "0" + sec}
   
//     if(nap_sorszam == 0 || nap_sorszam == 6) {
//         html += `<div class='szamlalo'>Hetvege nyehehe</div>`;
//     } else {
//         html += `<div class='szamlalo'>Jelenlegi Ido: ${hrs}:${min}:${sec}</div>`;
//         if (hrs >=8 && hrs <=16 && min >= 0 && min <45) {
//            html  += `<div class='szamlalo'>${ora_sorszam}. tanora</div>`;
//            html  += `<div class='szamlalo'>${min_left} perc van meg a tanorabol</div>`;
//            // kijelzo.innerHTML  += `<div class='szamlalo'>Ev: ${year} </div>`;
//         } else {
//             html  += `<div class='szamlalo'>SZUNET<br>hatra van meg: ${min%15} perc</div>`;      
//             html  += `<div class='szamlalo'>Kovetkezik: ${ora_sorszam+1}. tanora</div>`;      
//         }
//     }
//     kijelzo.innerHTML=html;
// }
// setInterval(frissites,1000)


// Stopper ////////////////////////////////////////////////////////////////////////////
var running = false;
var startTime = null;
var stoppedTime;
var stopButton = document.getElementById('stop');
var startButton = document.getElementById('start');
var szamlalo = document.getElementById('szamlalo');
var html = "";

function start() {
    console.log('start');
    running = true;
    startButton.classList.add('hide');
    stopButton.classList.remove('hide');
    if (startTime == null) {
        startTime = new Date().getTime();
    } else {
        startTime = stoppedTime; 
    }
}

 function stop() {
     console.log('stop');
     running = false;
     startButton.classList.remove('hide');
     stopButton.classList.add('hide');
     stoppedTimne = startTime;
     console.log(stoppedTimne);
}

function reset() {
    console.log('reset');
    startTime = null;
}

function refresh() {
    if (startTime == null) {
        startTime = new Date().getTime();
    } 
    now = new Date().getTime();
    diff_msec = now - startTime;
    msec = diff_msec.toString().slice(-3);
    sec = Math.floor(diff_msec/1000%60);
    min = Math.floor(diff_msec/1000/60);
    hr = Math.floor(min/60);
    if (sec <= 10) {
        sec = "0"+sec
    }
    if (min <= 10) {
        min = "0"+min
    }
    if (hr <= 10) {
        hr = "0"+hr
    }
    if(running) {
        html = hr+":"+min+":"+sec+" "+msec;
        szamlalo.innerHTML = html;
    } else {
        startTime += 1
        // startTime = stoppedTime;
        // console.log(startTime);
    }
}
setInterval(refresh, 1);


// Stopper ////////////////////////////////////////////////////////////////////////////
// var running = false;
// var startTime = null;
// var stopButton = document.getElementById('stop');
// var startButton = document.getElementById('start');
// var szamlalo = document.getElementById('szamlalo');
// var html = "";

// function start() {
//     console.log('start');
//     running = true;
//     startButton.classList.add('hide');
//     stopButton.classList.remove('hide');
//     if (startTime == null) {
//         startTime = new Date().getTime();
//     } 
// }

//  function stop() {
//      console.log('stop');
//      running = false;
//      startButton.classList.remove('hide');
//      stopButton.classList.add('hide');

// }

// function reset() {
//     console.log('reset');
//     startTime = null;
// }

// function refresh() {
//     if (startTime == null) {
//         startTime = new Date().getTime();
//     } 
//     now = new Date().getTime();
//     diff_msec = now - startTime;
//     msec = diff_msec.toString().slice(-3);
//     sec = Math.floor(diff_msec/1000%60);
//     min = Math.floor(diff_msec/1000/60);
//     hr = Math.floor(min/60);
//     if (sec <= 10) {
//         sec = "0"+sec
//     }
//     if (min <= 10) {
//         min = "0"+min
//     }
//     if (hr <= 10) {
//         hr = "0"+hr
//     }
//     if(running) {
//         html = hr+":"+min+":"+sec+" "+msec;
//         szamlalo.innerHTML = html;
//     }
// }
// setInterval(refresh, 1);

