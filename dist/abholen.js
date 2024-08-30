function test() {
  var Name = document.getElementById("Name").value;
  var Straße = document.getElementById("Straße").value;
  var Hausnummer = document.getElementById("Hausnummer").value;
  var Ort = document.getElementById("Ort").value;
  var Postleitzahl = document.getElementById("Postleitzahl").value;
  var Kleidung = document.getElementById("Kleidung").value;
  var Krisengebiet = document.getElementById("Krisengebiet").value;
  var Namex = document.getElementById("Namex");
  const Postzahlen = Postleitzahl.split("");
  const myPostleitzahl = [1, 2, 3, 4, 5];
  if (
    Name == "" ||
    Straße == "" ||
    Hausnummer == "" ||
    Ort == "" ||
    Postleitzahl == "" ||
    Kleidung == "" ||
    Krisengebiet == ""
  ) {
    var empty = document.getElementById("testfailed");
    empty.textContent = "Bitte füllen sie alle Felder aus!";
  } else if (
    Postzahlen[0] != myPostleitzahl[0] ||
    Postzahlen[1] != myPostleitzahl[1]
  ) {
    var Distanz = document.getElementById("testfailed");
    Distanz.textContent =
      "Um ihre Kleiderspende abholen zu können, muss ihre Adresse in dem gleichen Gebiet wie unsere Geschäftsstelle liegen!";
  } else {
    registration();
  }
}

function registration() {
  var Name = document.getElementById("Name").value;
  var Straße = document.getElementById("Straße").value;
  var Hausnummer = document.getElementById("Hausnummer").value;
  var Ort = document.getElementById("Ort").value;
  var Postleitzahl = document.getElementById("Postleitzahl").value;
  var Kleidung = document.getElementById("Kleidung").value;
  var Krisengebiet = document.getElementById("Krisengebiet").value;
  var Namex = document.getElementById("Namex");
  var orginalbox = document.getElementById("originalbox");
  orginalbox.style.display = "none";
  Namex.textContent += Name;
  var Adressex = document.getElementById("Adressex");
  Adressex.textContent += Straße + " ";
  Adressex.textContent += Hausnummer + ", ";
  Adressex.textContent += Ort + ", ";
  Adressex.textContent += Postleitzahl + ",";
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
