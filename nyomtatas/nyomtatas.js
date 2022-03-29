function kalkulal(){
    //Űrlapadatok
    const szel=document.getElementById('szelesseg').value;
    const mag=document.getElementById('magassag').value;
    const papir=document.getElementById('papirtipus').value;
    //Számítások
    let terulet=Math.round((szel*mag)/10000);  
	document.getElementById('terulet').innerHTML = terulet;
	document.getElementById('papir').innerHTML = papir;
    let koltseg=terulet*papir;
	document.getElementById('koltseg').innerHTML = koltseg;
	
    //Megjelenítés
    document.getElementById('valasz').style.visibility = "visible";
}

