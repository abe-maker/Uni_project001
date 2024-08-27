function test() {
  var Name = document.getElementById("Name").value;
  var Kleidung = document.getElementById("Kleidung").value;
  var Krisengebiet = document.getElementById("Krisengebiet").value;

  if (Name == "" || Kleidung == "" || Krisengebiet == "") {
    var empty = document.getElementById("testfailed");
    empty.textContent = "Bitte füllen sie alle Felder aus!";
  } else {
    registration();
  }
}

function registration() {
  var Name = document.getElementById("Name").value;
  var Kleidung = document.getElementById("Kleidung").value;
  var Krisengebiet = document.getElementById("Krisengebiet").value;
  var Namex = document.getElementById("Namex");
  var orginalbox = document.getElementById("originalbox");
  orginalbox.style.display = "none";
  Namex.textContent += Name;
  var Kleidungx = document.getElementById("Kleidungx");
  Kleidungx.textContent += Kleidung;
  var Krisengebietx = document.getElementById("Krisengebietx");
  Krisengebietx.textContent += Krisengebiet;
  console.log(Name);
  var confirmbox = document.getElementById("confirmbox");
  confirmbox.removeAttribute("hidden");
  var origianlbutton = document.getElementById("originalbutton");
  origianlbutton.setAttribute("hidden", "");
  var newbutton = document.getElementById("newbutton");
  newbutton.removeAttribute("hidden");
}
