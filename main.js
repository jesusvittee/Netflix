const pestania = document.querySelectorAll(".elemento-pestania");
const contenidoPestania = document.querySelectorAll(".elemento-contenido-pestania");


pestania.forEach(function(elemento, indice){
    elemento.addEventListener("click", () => {
        console.log(`Se hizo clic en el indice ${indice}`);
        
        eliminarBorde();
        eliminarMostrar();
        elemento.classList.add("borde-pestania")
        contenidoPestania[indice].classList.add("mostrar")
    })
})

function eliminarBorde() {
    pestania.forEach(elemento => {
        elemento.classList.remove("borde-pestania")
    })
}

function eliminarMostrar() {
    contenidoPestania.forEach(elemento => {
        elemento.classList.remove("mostrar")
    })
}
