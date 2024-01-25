function counter(elem){
    let z = document.getElementsByTagName(elem).length
    let x = "[" + "elmt=" + "'" + elem + "'" + "]"
    let y = document.querySelectorAll(x)
    for (let i = 0 ; i < y.length ; i++){
        y[i].innerHTML = z
    }
}

let Hcntr = counter

window.Hcntr = Hcntr
