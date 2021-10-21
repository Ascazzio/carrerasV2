var velocidad = 0;
var distancia = 50;
var distanciaRival = 0;

const race = () => {

    velocidad = velocidad + 10;
    distancia = distancia + velocidad;
}

setInterval(() => {
    velocidad = velocidad - 5;
    distanciaRival = distanciaRival + 50;
    if (velocidad <= 0) {velocidad = 1};
    
    console.log('Distancia = ' + distancia + '/ Velocidad = ' + velocidad);
    console.log('Rival = ' + distanciaRival);

    if (distancia >= 5000 || distanciaRival >= 5000) {
        capas('4');
    };
    

}, 50);

distancia = distancia + velocidad;
if (distancia <= 0) {distancia = 50};


