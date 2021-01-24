// BTN RELOAD //

let reload = document.querySelector(".reload");
reload.addEventListener("click", function () {
    window.location.reload();
});

// BTN DRAW //
let arr = [];
let draw = document.querySelector(".draw");
draw.addEventListener("click", function () {
    //mostrar las cartas//
    let input = document.querySelector("#input");
    let cartas = ["A", 2, 3, 4, 5, 6, 7, 8, 9, "J", "Q", "K"];
    let tipos = ["spade", "suit", "heart", "dinamond"];

    for (let i = 1; i <= input.value; i++) {
        //console.log(input.value);
        let main = document.querySelector("MAIN");
        let span = document.createElement("SPAN");
        let div = document.createElement("DIV");

        div.classList.add("card");
        span.classList.add(tipos[Math.floor(Math.random() * tipos.length)]);
        span.innerHTML = cartas[Math.floor(Math.random() * cartas.length)];
        arr.push({ number: span.innerHTML, type: span.classList.value });
        span.classList.add("number");
        div.appendChild(span);
        main.appendChild(div);
    };
    console.log(arr);
});

// BTN SORT //
let sort = document.querySelector(".sort");
sort.addEventListener("click", function () {
    let n = arr.length;

    for (let i = 0; i < n; i++) {
        // Finding the smallest number in the subarray
        let min = i;
        for (let j = i + 1; j < n; j++) {
            if (arr[j].number < arr[min].number) {
                min = j;
            }
        }
        if (min != i) {
            // Swapping the elements
            let tmp = arr[i];
            arr[i] = arr[min];
            arr[min] = tmp;
        }
        juanito();

    }
    return arr;


});


const juanito = () => {
    let contenedor = document.createElement("DIV");
    /////////IMPRIMIR CARTAS ////
    for (let j = 0; j < arr.length; j++) {
        //crear div//
        let divCarta = document.createElement("DIV");
        divCarta.classList.add("card");
        let numberCarta = arr[j]["number"];
        let tipoCarta = arr[j]["type"];
        //crear span//
        let spanCarta = document.createElement("SPAN");
        spanCarta.classList.add("number");
        spanCarta.innerHTML = numberCarta;
        spanCarta.classList.add(tipoCarta);
        //unir//
        divCarta.appendChild(spanCarta);
        //main//
        //let cartaMain = document.querySelector("main");
        //cartaMain.appendChild(divCarta);
        contenedor.appendChild(divCarta);
    }
    /////////IMPRIMIR CARTAS ////
    document.body.appendChild(contenedor);
}

