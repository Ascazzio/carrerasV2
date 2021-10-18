let trafficCar = ['beattle', 'datsun', 'mini', 'rover', 'van'];

 
const randomCar = () => {                                                   //Esooge un coche de trafico aleatorio
    return trafficCar[Math.floor(Math.random() * (4 - 0 + 1) ) + 0] ;
  }

const randomLine = () => {
  return Math.floor(Math.random() * (3 - 1 + 1) ) + 1;                      //Escoge un carril aleatorio
}

const randomTime = () => {
    return Math.floor(Math.random() * (parseInt(2000) - parseInt(500) + 1) ) + parseInt(500);   //Escoge un tiempo de cooldown aleatorio
}



const spawnTraffic = (car, line, time) => {

    switch (line) {
        case 1:
            
            break;
        case 2:
            
            break;

        case 3:
            
            break;
                
        default:
            console.log('Numero de carril invalido: ' + line);
            break;
    }

}



