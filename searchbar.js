function searchbar(search) {
  let t = "search(" + "'" + search + "'" + ")"
  let z = "[" + "search=" + "'" + search + "'" + "]"
  let x = document.createElement("input")
  x.setAttribute("id", search)
  x.setAttribute("onkeyup", t)
  x.setAttribute("type", "text")
  let y = document.querySelectorAll(z)
  let treewf = document.querySelector(z).hasAttribute("plhlder")
  if (treewf == true) {
    let wee = document.querySelector(z).getAttribute("plhlder")
    if (wee.value == "null") {
      wee = "search"
    }
    x.setAttribute("placeholder", wee)
  }
  for (let i = 0; i < y.length; i++) {
    y[i].append(x)
  }
}
let tr = ""
let tri = document.getElementsByTagName("searchbar")
for (let i = 0; i < tri.length; i++) {
  tr = tri[i].getAttribute("search")
  searchbar(tr)
}
//searchbar('search')
