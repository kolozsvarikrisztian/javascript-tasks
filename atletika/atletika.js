    const font = 0.45359237;

    function energiaKalkulalas(){
        var tevekenyseg = document.getElementById('tevekenyseg').value;
        var sulyKg = document.getElementById('kg').value;
        var perc = document.getElementById('perc').value;
        var t = tevekenysegKcal(tevekenyseg);
        var s = energiaFogyasSzorzo(sulyKg);
        var eredmenyP = document.getElementById('kcal');
        eredmenyP.textContent =  Math.round((t*s)*perc)+' kcal';
    }

    function tevekenysegKcal(tevekenyeg){
		if(tevekenyeg="seta") return 1.1;
		if(tevekenyeg="kocogas") return 1.5;
		if(tevekenyeg="futas") return 1.8;
		return 1;
    }

    function energiaFogyasSzorzo(sulyInKg){
     var sulyInFont = (sulyInKg/font);
     var szorzo = Math.round((sulyInFont/20));
     return szorzo;
    }

    function kepMegjelenit(){
      if (document.getElementById('tevekenyseg').value == 'seta')
        document.getElementById('kep').setAttribute('src', 'img/seta.jpg');

      else if (document.getElementById('tevekenyseg').value == 'kocogas')
        document.getElementById('kep').setAttribute('src', 'img/kocogas.webp');

      else if (document.getElementById('tevekenyseg').value == 'futas')
      document.getElementById('kep').setAttribute('src', 'img/futas.jpg');
    }
