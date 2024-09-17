function reload(){
    location.reload()
}
function copy(id){
var copyText = document.getElementById(id);

  // Select the text field
  copyText.select();
  copyText.setSelectionRange(0, 99999); // For mobile devices

   // Copy the text inside the text field
  navigator.clipboard.writeText(copyText.value);

  // Alert the copied text
   var tooltip = document.getElementById("myTooeltip")
   tooltip.innerHTML = "Copied Text";
   document.getElementById("copyicon").innerHTML = "check"
   setTimeout(resete,3000);
}
function resete(){
    document.getElementById("copyicon").innerHTML = "duplicate"
}
function outFunc() {
  var tooltip = document.getElementById("myTooeltip")
  tooltip.innerHTML = "Copy to Clipboard"
}