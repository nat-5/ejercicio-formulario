function datosEdad(elEvento){
    elEvento.preventDefault();

    var NOMBRE = document.querySelector("#NOMBRE").value;
    var AÑO  = document.querySelector("#AÑO").value;

    var bienvenida =document.querySelector("#bienvenida");

   if(AÑO >= 2006){

        bienvenida.innerHTML = "Hola niñ@ " + NOMBRE + 
        ",naciste en " + AÑO;

    }else if(AÑO >= 2003){
        bienvenida.innerHTML = "Hola joven  " + NOMBRE + 
        ",naciste en " + AÑO;

    }else {
        bienvenida.innerHTML = "Hola Señor@  " + NOMBRE +
         ",naciste en " + AÑO;
    }
}

var formulario = document.querySelector("#formulario");
formulario.addEventListener("submit",datosEdad);

