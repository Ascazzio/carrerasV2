
let playerCars = [];

const select = (car) => {

    if (playerCars.length <= 1) {
        playerCars.push(car);

        document.querySelector('#' + car).classList.add("selectedEffect");

        playerCars.forEach(function (element, i, array) {

            console.log('indice: ' + i + ' / valor: ' + element );

        });

        console.log('Fin del llamado');
    }
        

};

mostrarArray(playerCars);