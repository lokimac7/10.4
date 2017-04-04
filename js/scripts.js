function Telefon(marka, cena, kolor) {
	this.marka = marka;
	this.cena = cena;
	this.kolor = kolor;
}

Telefon.prototype.printInfo = function() {
	console.log("Marka telefonu to " + this.marka + ", kolor to " + this.kolor + ", a cena to " + this.cena + ".");
};

var samsungGalaxyS6 = new Telefon('Samsung', 2900, 'czarny'),
	iPhone6S = new Telefon('Apple', 3500, 'złoty'),
	onePlusOne = new Telefon('OnePlus', 2300, 'biały');