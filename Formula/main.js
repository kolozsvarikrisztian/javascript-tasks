$(document).ready(function () {
  $('.navbar-nav li').click(function (x) {
    $('.navbar-nav li').removeClass('active');
    $(event.target).parent().addClass('active');
  });
});

function showCircuit() {
    $('#circuit').change(function (o) {
      switch (o.target.value) {
        case 'ITA':
          $('#circuitimage').attr('src', 'img/monza.jpg');
          $('#f1sound')[0].play();
          break;
        case 'HUN':
          $('#circuitimage').attr('src', 'img/hungaroring.jpg');
          break;
        case 'BEL':
          $('#circuitimage').attr('src', 'img/spa.jpg');
          break;
        case 'MON':
          $('#circuitimage').attr('src', 'img/monaco.jpg');
          break;

        default:
          break;
      }
    });
  }

//---------------------------------------------------------

function calculate() {
	var v=0;
    if(circuit.value=="HUN")
		v = 4.381/(laptime.value/3600);
	else if(circuit.value=="MON")
		v = 3.337/(laptime.value/3600);
	else if(circuit.value=="BEL")
		v = 7.004/(laptime.value/3600);
	else
		v = 5.793/(laptime.value/3600);
	averagespeed.value = v + " km/h";
  }
  
  
  
  
  
  
  
  
  
  
