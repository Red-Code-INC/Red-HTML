function counter(elem){
    let z = document.getElementsByTagName(elem).length
    x = "[" + "elmt=" + "'" + elem + "'" + "]"
    let y = document.querySelectorAll(x)
    for (i = 0 ; i < y.length ; i++){
        y[i].innerHTML = z
    }
}

let Hcntr = counter

window.Hcntr = Hcntr