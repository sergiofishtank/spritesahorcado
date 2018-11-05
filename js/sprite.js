$(function(){

  //inputs palabra secreta
  var palabraSecreta = document.getElementById("txtSecreta");
  var botonSecreta = document.getElementById("bttSecreta");
  //inputs jugador
  var letraJugador = document.getElementById("txtJugador");
  var botonJugador = document.getElementById("bttJugador");

  var spriteposition = 582;
  var intentos = 3;

  //Validar caracteres palabra secreta
  $("#txtSecreta").keyup(function(){
        

      var palabra = palabraSecreta.value;
      var condicionSecreta = /^[a-z]{2,}$/;
      

      if (condicionSecreta.test(palabra)) {
        $("#txtSecreta").css("border-color","#ffffff");
        $("#bttSecreta").attr("disabled",false);
      }
      else{
        

        $("#txtSecreta").css("border-color","#ff0000");
        $("#bttSecreta").attr("disabled",true);
      }
  });

  //Validar caracteres que ingresara el jugador
  $("#txtJugador").keyup(function(){
        

      var letra = letraJugador.value;
      var condicionJugador = /^[a-z]{1}$/;
      

      if (condicionJugador.test(letra)) {
        $("#txtJugador").css("border-color","#ffffff");
        $("#bttJugador").attr("disabled",false);
      }
      else{
        

        $("#txtJugador").css("border-color","#ff0000");
        $("#bttJugador").attr("disabled",true);
      }
  });  

  function addCamp(){
    
    var palabra = palabraSecreta.value;
    var posiciones = palabra.length;

    for(var i=0; i<posiciones; i++){

      $("#palabra").append("<p class='inputLetra' id='"+i+"'>");
      $("#"+i).html("");
    }
    //desactivar despues de enviar palabra secreta
    $(".campoSecreta").css('visibility','hidden');
    $(".campoJugador").css('visibility','visible');

    $("#intentos").html("Errores para ahorcarte = "+intentos);
  }

  //comprobar letras
  function validar(){
    
    var bandera = false;

    var palabra = palabraSecreta.value;
    var posiciones = palabra.length;

    var letraJ = letraJugador.value;

    var celda = document.getElementById(i);

    for(var i=0; i<posiciones; i++){
      
      if (palabra.charAt(i)===letraJ) {

        $("#"+i).html(letraJ);
        $("#"+i).css("background-color","#ffffff");

        bandera = true;
      }
    } 

    if (bandera==false){

      alert("Letra // "+letraJ+" // no está");

      spriteposition = spriteposition - 145;

      //cambio de posicion imagen
      $("#prueba").css("background-position-x",spriteposition+"px");

      if(intentos > 1){
        intentos = intentos-1;
        $("#intentos").html("Errores para ahorcarte = "+intentos);
      }
      else {
        $("#intentos").css("background-color","#ff0000");
        $("#intentos").html("AHORCADO");
        $("#bttJugador").attr("disabled",true);
        $("#txtJugador").attr("disabled",true);
      }
      
    }
    
    $("#txtJugador").val("");
    
  }

  function ganar(){
    var ganar = false;
    var letracasilla; 
    var palabra=palabraSecreta.value;
    var posiciones = palabra.length;
    
    for(var i=0; i<posiciones; i++){

      letracasilla = $("#"+i).html();
      
      if (letracasilla === "") {
        ganar = false;
        break;

      }else{        
        ganar = true;
      } 
    }

    if (ganar===true) {
      $("#intentos").css("background-color","#2d8203");
      $("#intentos").html("GANÓ");
      $("#bttJugador").attr("disabled",true);
      $("#txtJugador").attr("disabled",true);
    }
  }

  //llamado de funciones en botones
  botonSecreta.addEventListener("click", addCamp);
  botonJugador.addEventListener("click", validar);
  botonJugador.addEventListener("click", ganar);
  
});


//by Sergio Suarez sergio.suaf@hotmail.com