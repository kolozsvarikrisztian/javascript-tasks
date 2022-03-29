function szamol()
{
	gyok.innerHTML = "?";
	if (a.value == "" || b.value == "" || c.value == "")
		gyok.innerHTML = "hiba";
	else
	{
		var D = b.value * b.value - 4 * a.value * c.value;
		if (D < 0)
			gyok.innerHTML = "nincs megoldás";
		else if(D == 0)
			gyok.innerHTML = 1;
		else
			gyok.innerHTML = 2;
	}
}