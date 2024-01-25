function space(number) {
  let z = number;
  let y = "[" + "num=" + "'" + number + "'" + "]"
  let x = document.querySelectorAll(y)
  for (let j = 0; j < x.length; j++) {
    for (let i = 0; i < z; i++) {
      x[j].innerHTML = x[j].innerHTML + "&nbsp"
    }
  }
}

let Hsp = space

window.Hsp = Hsp