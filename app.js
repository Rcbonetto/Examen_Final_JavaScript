var calculadoraNextU = {

	pantalla = document.getElementById("display"),
	valPantalla = "0",
	operar = "",
	valoruno = 0,
	valordos = 0,
	valortres = 0,
    resultado = 0,

	init: (function(){
		this.formatearBotones(".tecla");
		this.eventosFuncionCalculadora();
	}),

	//Dar formato a Botones -- Agrandamos y achicamos de acuerdo al los eventos
	//de desplasamiento de mouse

	formatearBotones: function(seleccion){
		var y = document.querySelectorAll(seleccion);
		for (var i = 0; i < y.lenght; i++) {
			y[i].onmouseover = this.achicarBoton;
			y[i].onmouseout = this.agrandaBoton;
		};
	},

	//Evento para achicar el botón donde posamos el mouse
	


var btn = document.querySelectorAll(".tecla"),
    input = document.querySelector("#display");

for(var num = 0; num < btn.length; num++){
  document.onkeypress = function(){
    var key = event.keyCode;
    for(var num1 = 0; num1 <= 10; num1++){
      if(key === (48+num1)){
        input.innerHTML += num1;
      }
    }

  }
}
}

calculadoraNextU.init();
