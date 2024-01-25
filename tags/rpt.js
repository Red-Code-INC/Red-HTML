function repeat(number,text){
    let z = number
    let y = "[" + "num=" + "'" + number + "'" + "]"
    let x = document.querySelectorAll(y)
    for (let i = 0 ; i < x.length ; i++){
        for (let j = 0 ; j < z ; j++){
            x[i].innerHTML = x[i].innerHTML + text
        }
    }
}

let Hrpt = repeat

window.Hrpt = Hrpt
