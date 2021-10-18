
var playerCars = [];

// const repeatedCar = (car) => {
    
// }

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