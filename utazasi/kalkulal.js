function szamol(elem) {
    var letszam = document.getElementById('letszam');
    var ejszaka = document.getElementById('ejszaka');
    var orszag = document.getElementById('orszag');

    if (elem.value > parseInt(elem["max"])){
      elem.value = parseInt(elem["max"]);
    }
    
    if (elem.value < parseInt(elem["min"])){
      elem.value = parseInt(elem["min"]);
    }
      
    const arak = {
      b:5600,
      g:6200,
      h:5000,
      t:5800
    }

    var fizetendo;

    //--számolás--
    fizetendo = arak[orszag.value] * letszam.value * ejszaka.value;
    //   if(orszag.value == "b")
		//   fizetendo = 5600 * letszam.value * ejszaka.value;
	  // else if(orszag.value == "g")
		//   fizetendo = 6200 * letszam.value * ejszaka.value;
	  // else if(orszag.value == "h")
		//   fizetendo = 5000 * letszam.value * ejszaka.value;
	  // else if(orszag.value == "t")
		//   fizetendo = 5800 * letszam.value * ejszaka.value;
    //------------
    document.getElementById('eredmeny').value = fizetendo+" Ft";
    
}