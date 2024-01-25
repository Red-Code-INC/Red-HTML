import "./rpt.js"
import "./space.js"
import "./mline.js"
import "./counter.js"
import "./searchbar.js"



let mline = document.getElementsByTagName("mr")
for (let i = 0; i < mline.length; i++) {
  let y = mline[i].getAttribute("num")
  Hml(y)
}


let sp = document.getElementsByTagName("sp")
for (let i = 0; i < sp.length; i++) {
  let snum = sp[i].getAttribute("num")
  Hsp(snum)
}

let rpt = document.getElementsByTagName("rpt")
for (let i = 0; i < rpt.length; i++) {
  let nm = rpt[i].getAttribute("num")
  let txt = rpt[i].innerHTML
  Hrpt(nm, txt)
}

let cntr = document.getElementsByTagName("counter");
for (let i = 0 ; i < cntr.length ; i++){
    let ce = cntr[i].getAttribute("elmt")
    Hcntr(ce)
}
let tr = ""
let tri = document.getElementsByTagName("searchbar")
for (let i = 0; i < tri.length; i++) {
  tr = tri[i].getAttribute("search")
  searchbar(tr)
}
//searchbar('search')
