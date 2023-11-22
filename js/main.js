let automobili = [
    {
        marca: "fiat",
        modello: "2020",
        alimentazione: "benzina"
    },
    {
        marca: "audi",
        modello: "2016",
        alimentazione: "diesel"
    },
    {
        marca: "suzuki",
        modello: "2018",
        alimentazione: "gpl"
    },
    {
        marca: "dodge",
        modello: "2000",
        alimentazione: "benzina"
    },
    {
        marca: "skyline",
        modello: "2002",
        alimentazione: "benzina"
    },
    {
        marca: "bmw",
        modello: "2019",
        alimentazione: "elettrica"
    },
    {
        marca: "mecedes",
        modello: "2009",
        alimentazione: "ibrida"
    },
    {
        marca: "ferrari",
        modello: "2006",
        alimentazione: "diesel"
    },
    {
        marca: "mclaren",
        modello: "2012",
        alimentazione: "diesel"
    },
    {
        marca: "lamborghini",
        modello: "2021",
        alimentazione: "elettrica"
    }
];

let automobiliBenzina = [];
let automobiliDiesel = [];
let automobiliRestanti = [];

automobili.forEach(function(auto) { 
    if(auto.alimentazione == "benzina") {
        automobiliBenzina.push(auto);
    } else if(auto.alimentazione == "diesel") {
        automobiliDiesel.push(auto);
    } else {
        automobiliRestanti.push(auto);
    }
});

let listAuto = "";
automobiliBenzina.forEach(function(auto) {
     listAuto += `<li class="list-group-item">${auto}</li>`
let card = `
<div class="col">
        <div class="card">
          <div class="card-header">
            Le auto a benzina sono:
          </div>
          <ul class="list-group list-group-flush">
            ${listAuto}
          </ul>
        </div>
      </div>
`;
document.getElementById("card-cars").innerHTML = card;
});
//--------------------- FUNZIONI -----------------------
function printObject(object) {
    let string = "";

    string += "{\n";

    for (let key in object) {
        string += "\t " + key + ": " + object[key] + "\n";
    }

    string += "}";

    console.log(string);

}

function printArrayObject(arrayObject) {
    for (let i = 0; i < arrayObject.length; i++) {

        let object = arrayObject[i];

        console.log("Le auto n° " + (i + 1) + " è:");
        printObject(object);
    }
}