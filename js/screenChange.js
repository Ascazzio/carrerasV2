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