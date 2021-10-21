
var carril = 2;

const keyEvent = (event) => {

    
    switch(event.keyCode){
        case 32:
            console.log("pulsaste la barra espaciadora");
            document.getElementById("player").src = `img/${playerCars[0]}R.png`;

        break;

        case 115: //Letra "s"
            console.log("pulsaste la (s)" );
        break;

        // //Derecha / right
        // case 39:
        //     console.log("pulsaste la flecha derecha");
            
        //     if (document.getElementById("player").classList.contains("left")) {  
        //                                                                                 // Si se encuentra en la derecha
        //         document.getElementById("player").classList.remove("left");             // Pase al medio
        //         document.getElementById("player").src = `img/${playerCars[0]}C.png`;

        //         setTimeout(() => {
        //             carril = 2;
        //             console.log("carril =" + carril);    
    
        //         }, 250);

        //     } else {
        //         document.getElementById("player").src = `img/${playerCars[0]}R.png`;
        //         document.getElementById("player").classList.add("right");                // Si ya se encuentra en el centro
                                                                                        
        //         setTimeout(() => {                                                      // Entoces cambiar a la derecha
        //             carril = 3;
        //             console.log("carril =" + carril);    
    
        //         }, 250);

        //     }
            
        // break;

        // //Izquierda / left
        // case 37:
        //     console.log("pulsaste la flecha izquierda");
        //     // document.getElementById("player").src = `img/${playerCars[0]}L.png`;

        //     if (document.getElementById("player").classList.contains("right")) {

        //         document.getElementById("player").classList.remove("right");
        //         document.getElementById("player").src = `img/${playerCars[0]}C.png`;

        //         setTimeout(() => {
        //             carril = 2;
        //             console.log("carril =" + carril);    
        //         }, 250);

        //     } else {
        //         document.getElementById("player").src = `img/${playerCars[0]}L.png`;
        //         document.getElementById("player").classList.add("left");

        //         setTimeout(() => {
        //             carril = 1;
        //             console.log("carril =" + carril);    
        //         }, 250);
        //     }

        // break;

        default:
            console.log("Movimineto invalido");
        break;
    };

}
