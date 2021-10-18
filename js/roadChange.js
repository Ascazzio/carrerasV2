let tx = "t";

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

    document.getElementById("player").src=`img/${playerCars[0]}C.png`;

}

roadMov(250);
