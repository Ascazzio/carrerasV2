const capas = (num) => {

    let faseSolicitada = "fase" + num;
    let arrayFases = ["fase1", "fase2", "fase3", "fase4"];

    arrayFases = arrayFases.filter(val => !faseSolicitada.includes(val));

    document.getElementById(faseSolicitada).style.display = "block";

    for (let _f of arrayFases) {

        document.getElementById(_f).style.display = "none";
    }

};