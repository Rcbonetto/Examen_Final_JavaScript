var calculadoraNextU = {

	pantalla: document.getElementById("display"),
	valPantalla: "0",
	operar: "",
	valoruno: 0,
	valordos: 0,
	valortres: 0,
  resultado: 0,
	aTeclaIgual: false,

	init: (function(){
		this.formatearBotones(".tecla");
		this.eventosFuncionCalculadora();
	}),

	//Dar formato a Botones -- Agrandamos y achicamos de acuerdo al los eventos
	//de desplazamiento de mouse

	formatearBotones: function(selector){
		var z = document.querySelectorAll(selector);
		for (var i = 0; i < z.lenght; i++) {
			z[i].onmouseover = this.achicarBoton;
			z[i].onmouseleave = this.agrandaBoton;
		};
	},

	//Evento para achicar el botón donde posamos el mouse
	achicarBoton: function(event){
		calculadoraNextU.reduceBoton(event.target);
	},

	agrandaBoton: function(event){
		calculadoraNextU.retornaBoton(event.target);
	},

	// Formatear Botones - reduce
	reduceBoton: function(elemento){
		var z = elemento.id;
		if (z=="1" || z=="2" || z=="3" || z=="0" || z=="igual" || z=="punto"){
			elemento.style.width = "25%";
			elemento.style.height = "59px";
			elemento.style.background = red;
		}else if(z == "mas"){
			elemento.style.width = "85%";
			elemento.style.height = "95%";
			elemento.style.background = red;
		}else{
			elemento.style.width = "20%";
			elemento.style.height = "61px";
			elemento.style.background = red;
		}
	},

 // Formatear Botones - Aumenta
 retornaBoton: function(elemento){
 var z = elemento.id;
 if (z=="1" || z=="2" || z=="3" || z=="0" || z=="igual" || z=="punto"){
	 elemento.style.width = "29%";
	 elemento.style.height = "63px";
 }else if(z == "mas"){
	 elemento.style.width = "90%";
	 elemento.style.height = "100%";
 }else{
	 elemento.style.width = "22%";
	 elemento.style.height = "63px";
 }
},

// Funcion de calculadora
eventosFuncionCalculadora: function(){
	document.getElementById("0").addEventListener("click", function(){
		calculadoraNextU.numeroIngresado("0");});
	document.getElementById("1").addEventListener("click", function(){
		calculadoraNextU.numeroIngresado("1");});
	document.getElementById("2").addEventListener("click", function(){
		calculadoraNextU.numeroIngresado("2");});
	document.getElementById("3").addEventListener("click", function(){
		calculadoraNextU.numeroIngresado("3");});
	document.getElementById("4").addEventListener("click", function(){
		calculadoraNextU.numeroIngresado("4");});
	document.getElementById("5").addEventListener("click", function(){
		calculadoraNextU.numeroIngresado("5");});
	document.getElementById("6").addEventListener("click", function(){
		calculadoraNextU.numeroIngresado("6");});
	document.getElementById("7").addEventListener("click", function(){
		calculadoraNextU.numeroIngresado("7");});
	document.getElementById("8").addEventListener("click", function(){
		calculadoraNextU.numeroIngresado("8");});
	document.getElementById("9").addEventListener("click", function(){
		calculadoraNextU.numeroIngresado("9");});
	document.getElementById("on").addEventListener("click", function(){
		calculadoraNextU.borrarPantalla();});
	document.getElementById("sign").addEventListener("click", function(){
		calculadoraNextU.cambioSigno();});
	document.getElementById("punto").addEventListener("click", function(){
		calculadoraNextU.decimal();});
	document.getElementById("igual").addEventListener("click", function(){
		calculadoraNextU.mostrarResultado();});
	document.getElementById("raiz").addEventListener("click", function(){
		calculadoraNextU.calculoOperacion("raiz");});
	document.getElementById("dividido").addEventListener("click", function(){
		calculadoraNextU.calculoOperacion("/");});
	document.getElementById("por").addEventListener("click", function(){
		calculadoraNextU.calculoOperacion("*");});
	document.getElementById("menos").addEventListener("click", function(){
		calculadoraNextU.calculoOperacion("-");});
	document.getElementById("mas").addEventListener("click", function(){
		calculadoraNextU.calculoOperacion("+");});
},

numeroIngresado: function(valorgral){
  if (this.valPantalla.length < 8){
		if (this.valPantalla == "0"){
			this.valPantalla = "";
			this.valPantalla = this.valPantalla + valorgral;
		}else {
	    this.valPantalla = this.valPantalla + valorgral;
  }
		this.cierrePantalla();
	}
},

cierrePantalla: function(){
	this.pantalla.innerHTML = this.valPantalla;
},

// Funciones de Teclas de la calculadora
borrarPantalla: function(){
	this.valPantalla = "0";
	this.operar = "";
	this.valoruno = 0;
	this.valordos = 0;
	this.resultado = 0;
	this.Operación = "";
	this.valortres = 0;
	this.cierrePantalla();
	this.aTeclaIgual = false;
},

cambioSigno: function(){
	if (this.valPantalla !="0"){
		var xau;
		if (this.valPantalla.charAt(0) == "-"){
			xau = this.valPantalla.slice(1);
		}else{
			xau = "-" + this.valPantalla;
		}
		this.valPantalla = "";
		this.valPantalla = xau;
		this.cierrePantalla();
	}
},

decimal: function(){
	if (this.valPantalla.indexOf(".") == -1){
		if (this.valPantalla == ""){
			this.valPantalla = this.valPantalla + "0.";
		}else{
			this.valPantalla = this.valPantalla + ".";
		}
		this.cierrePantalla();
	}
},

calculoOperacion: function(oper){
	this.valoruno = parseFloat(this.valPantalla);
	this.valPantalla = "";
	this.operar = oper;
	this.aTeclaIgual = false;
	this.cierrePantalla();
},

//función de la Tecla igual
mostrarResultado: function(){
	if (!this.aTeclaIgual){ //se presiona igual por primera vez
		this.valordos = parseFloat(this.valPantalla);
		this.valortres = this.valordos;
// calculamos el Resultado
this.calcularOperacion(this.valoruno, this.valordos, this.operar);
}else{ //siguiente ves que se presiona igual
	//calculamos el resultado
	this.calcularOperacion(this.valoruno, this.valordos, this.operar);
}
//almacenamos el resultado como primer valor para poder seguir operando
this.valoruno = this.resultado;
//borramos la pantalla y reemplazamos valores por el Resultado
this.valPantalla = "";
// verifivamos el largo del resultado y lo recortamos en caso de que el
//mismo supere el tamaño del display
if(this.resultado.toString().length < 9){
	this.valPantalla = this.resultado.toString();
}	else{
	this.valPantalla = this.resultado.toString().slice(0,8);
}
this.aTeclaIgual = true;
this.cierrePantalla();
},

 calcularOperacion: function(valoruno, valordos, operar){
	 switch (operar) {
	 	case "+":
			this.resultado = eval(valoruno + valordos);
	 	break;
		case "-":
		  this.resultado = eval(valoruno - valordos);
		break;
		case "*":
			this.resultado = eval(valoruno * valordos);
		break;
		case "/":
		  this.resultado = eval(valoruno / valordos);
		break;
		case "raiz":
		  this.resultado = eval(Math.sqrt(valoruno));
    }
 },
};

calculadoraNextU.init();
