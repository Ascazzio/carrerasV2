
let playerCars = [];
let tx = "t";

let velocidad = 0;
let distancia = 50;
let distanciaRival = 0;
let startRace = false;


//Esta funcion se encarga de cambiar las pantallas

const capas = (num) => {

    let faseSolicitada = "fase" + num;
    let arrayFases = ["fase1", "fase2", "fase3", "fase4"];

    arrayFases = arrayFases.filter(val => !faseSolicitada.includes(val));

    document.getElementById(faseSolicitada).style.display = "flex";

    for (let _f of arrayFases) {

        document.getElementById(_f).style.display = "none";
    }

    document.getElementById("player").src = `img/${playerCars[0]}C.png`;  //Para que aparezca el coche correspondiente

};

// La funcion select es para llenar el array "playerCars" con los
// coches que seleccione el jugador

const select = (car) => {

    if (document.querySelector('#' + car).classList.contains("selectedEffect")) {
        
    }
      

    if (playerCars.length <= 1) { //para seleccionas hasta 2 coches
        playerCars.push(car);

        document.querySelector('#' + car).classList.add("selectedEffect");

        playerCars.forEach(function (element, i, array) {

            console.log('indice: ' + i + ' / valor: ' + element );

        });

        console.log('Fin del llamado');
    };  

};

mostrarArray(playerCars);

//La funcion roadMov sirve para darle movimiento a la carretera en
// funcion del tiempo que se le pase por parametro, utiliza la
// variable "tx" para reconocer el trapecio seleccionado y cambiar su
// color

const roadMov = (time) => {

    setInterval( () => {

        for (let i = 1; i < 14; i++) {       //Recorre cada "t" y cambia sus propiedades

            tx = "t" + i;       

            if (document.getElementById(tx).classList.contains("ligth")) {

                document.getElementById(tx).classList.add("dark");              // Si es "claro", cambia a oscuro
                document.getElementById(tx).classList.remove("ligth");

            } else {
                document.getElementById(tx).classList.add("ligth");
                document.getElementById(tx).classList.remove("dark");           // Y viseversa
            }

       }

    }, time);

    document.getElementById("player").src=`img/${playerCars[0]}R.png`;

};

// speedUp es una funcion utilizada para "acelerar" al jugador
// se activa cada vez que el jugador presiona la barra espaciadora

const  speedUp = () => {

    velocidad = velocidad + 10;
    distancia = distancia + velocidad;

};

// restart reinicia las variables del juego en cero

const restart = () => {

     velocidad = 0;
     distancia = 0;
     distanciaRival = 0;

};

// ganador muestra regresa el ganador de la carrera

const ganador = () => {
    if (distanciaRival > distancia) {
        return alert('Tu rival a ganado');        
    } else {
        return alert('Has ganado!');
    };

    startRace = 'false';
    restart();
};

// race inicia la carrera entre el rival y el jugador
// el primero en llegar a 5000 de distancia gana

const race = () => {

    if (start == true) {
    
        setInterval(() => {
            velocidad = velocidad - 5;
            distanciaRival = distanciaRival + 50;
            if (velocidad <= 0) {velocidad = 1};
            
            console.log('Distancia = ' + distancia + '/ Velocidad = ' + velocidad);
            console.log('Rival = ' + distanciaRival);

            if (distancia >= 5000 || distanciaRival >= 5000) {
                capas('4');
                ganador();
                restart();
            };

        }, 50);

    };

};

distancia = distancia + velocidad;
if (distancia <= 0) {distancia = 50};

// keyEvent escucha a los eventos introducidos por teclado y
// y ejecuta varios comandos basado en la tecla presionada

const keyEvent = (event) => {

    
    switch(event.keyCode){
        case 32:
            console.log("pulsaste la barra espaciadora");
            speedUp();

        break;

        case 115: //Letra "s"
            console.log("pulsaste la (s)" );
        break;

        // //Derecha / right
        case 39:
            document.getElementById("player").src = `img/${playerCars[0]}R.png`;
            roadMov(250);
            start = true;
            race(); 
            
        break;

        default:
            console.log("Movimineto invalido");
        break;
    };

}