//--------Constantes -----//

const botonEncriptar = document.querySelector(".boton-encriptar");
const textoEncriptar = document.querySelector(".contenedor-texto");
const aviso = document.querySelector(".parrafo-aviso");
const respuesta = document.querySelector(".contenedor-texto-encriptado");
const mostrarContenido = document.querySelector(".contenedor-texto-derecho");
const botonCopiar = document.querySelector(".boton-copiar");
const botonDesencriptar = document.querySelector(".boton-desencriptar");




//--Botón Encriptar----//

botonEncriptar.addEventListener("click",e=>{
    e.preventDefault();
    let texto = textoEncriptar.value;
    let txt = texto.normalize("NFD").replace( /[$.¿?~!¡@#%^&*()_|}{[\]><:"`;,\u0300-\u036f']/g,"");

   //------Validación para que el  campo de texto no este vacío------//

    if (texto === ""){
        aviso.style.background = "#0A3871"
        aviso.style.color = "#FFFFFF"
        aviso.style.fontWeight = "800"
        aviso.textContent = "Debes completar el campo"

        setTimeout(()=>{
            aviso.removeAttribute("style");
        },1500);
    }
    //-----Validación para tildes y caracteres especiales-----//

    else if (texto !== txt){
        aviso.style.background = "#0A3871"
        aviso.style.color = "#FFFFFF"
        aviso.style.fontWeight = "800"
        aviso.textContent = "El texto no debe contener tildes ni  caracteres especiales "

        setTimeout(()=>{
            aviso.removeAttribute("style");
        },1500);
    }

    //-------Validación para no escribir en letras mayúsculas-----//

    else if (texto !== texto.toLowerCase()){
        aviso.style.background = "#0A3871"
        aviso.style.color = "#FFFFFF"
        aviso.style.fontWeight = "800"
        aviso.textContent = "El texto no debe contener mayúsculas  "

        setTimeout(()=>{
            aviso.removeAttribute("style");
        },1500);

    }
   //------Encriptación del texto------//
    else {
        texto = texto.replace(/e/mg,"enter")
                      .replace(/i/mg,"ines")
                      .replace(/a/mg,"ia")
                      .replace(/o/mg,"ober")
                      .replace(/u/mg,"ufat")
        respuesta.innerHTML = texto;
        botonCopiar.style.visibility = "inherit";
        mostrarContenido.remove();

    }
    document.querySelector(".contenedor-texto").value ="";

});

//--Botón Desencriptar----//

botonDesencriptar.addEventListener("click",e=>{
    e.preventDefault();
    let texto = textoEncriptar.value;
    let txt = texto.normalize("NFD").replace( /[$.¿?~!¡@#%^&*()_|}{[\]><:"`;,\u0300-\u036f']/g,"");

    //------Validación para que el campo de texto no este vacío------//

    if (texto === ""){
        aviso.style.background = "#0A3871"
        aviso.style.color = "#FFFFFF"
        aviso.style.fontWeight = "800"
        aviso.textContent = "Debes completar el campo"

        setTimeout(()=>{
            aviso.removeAttribute("style");
        },1500);
    }
    //-----Validación para tildes y caracteres especiales-----//

    else if (texto !== txt){
        aviso.style.background = "#0A3871"
        aviso.style.color = "#FFFFFF"
        aviso.style.fontWeight = "800"
        aviso.textContent = "El texto no debe contener tildes ni  caracteres especiales "

        setTimeout(()=>{
            aviso.removeAttribute("style");
        },1500);
    }

    //-------Validación para no escribir en letras mayúsculas-----//

    else if (texto !== texto.toLowerCase()){
        aviso.style.background = "#0A3871"
        aviso.style.color = "#FFFFFF"
        aviso.style.fontWeight = "800"
        aviso.textContent = "El texto no debe contener mayúsculas  "

        setTimeout(()=>{
            aviso.removeAttribute("style");
        },1500);

    }
    //------Desencriptación del texto------//
    else {
        texto = texto.replace(/enter/mg,"e")
                     .replace(/ines/mg,"i")
                     .replace(/ia/mg,"a")
                     .replace(/ober/mg,"o")
                     .replace(/ufat/mg,"u")
        respuesta.innerHTML = texto;

        botonCopiar.style.visibility = "inherit";
        mostrarContenido.remove();
    }
    document.querySelector(".contenedor-texto").value ="";

});

//-----Botón Copiar-----//

botonCopiar.addEventListener("click",e=> {
    e.preventDefault();
    respuesta.select();
    document.execCommand("copy");

    });

