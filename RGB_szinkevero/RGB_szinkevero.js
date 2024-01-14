let r = document.getElementById("r");
let rval = document.getElementById("rval");
let g = document.getElementById("g");
let gval = document.getElementById("gval");
let b = document.getElementById("b");
let bval = document.getElementById("bval");
let rgb = document.getElementById("rgb");

function update () {
    rval.innerHTML = r.value;
    gval.innerHTML = g.value;
    bval.innerHTML = b.value;
    let rgbval = "#" + parseInt(r.value).toString(16) + parseInt(g.value).toString(16) + parseInt(b.value).toString(16);
    console.log(rgbval);
    rgb.value = rgbval;
    document.body.style.background = rgbval;
}

update();




