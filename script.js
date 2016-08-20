function Telefon(marka, cena, kolor) { 
    this.marka = marka; 
    this.cena = cena;
    this.kolor = kolor; 
};
Telefon.prototype.printInfo = function() {
   console.log('Marka telefonu to ' + this.marka + ', kolor to ' + this.kolor + ', a cena to ' + this.cena + '.'); 
};

var SamsungS6 = new Telefon("Samsung", 2000, "zloty") 
var OnePlus  = new Telefon("Htc", 1500, "bialy") 
var iPhone6s = new Telefon("Apple", 2500, "srebrny") 
iPhone6s.printInfo();
OnePlus.printInfo();
SamsungS6.printInfo();


