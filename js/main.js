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


listaTipoAuto(automobiliBenzina, "card-cars-benzina");
listaTipoAuto(automobiliDiesel, "card-cars-diesel");
listaTipoAutoRestanti(automobiliRestanti, "card-cars-restanti");



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

function listaTipoAuto(arrayAuto, tipo) {
    
    let listAuto = "";
    let alimentazione = "";
    arrayAuto.forEach(function(auto) {
        listAuto += `<li class="list-group-item">${auto.marca} ${auto.modello}</li>`;
        alimentazione = `${auto.alimentazione}`;
    });
        let card = `
        <div class="col">
        <div class="card">
          <div class="card-header">
            Le auto ${alimentazione} sono:
          </div>
          <ul class="list-group list-group-flush">
          ${listAuto}
          </ul>
        </div>
      </div>
        
      
    `;
    document.getElementById(tipo).innerHTML = card;
    
}

function listaTipoAutoRestanti(arrayAuto, tipo) {
    let listAuto = "";
    arrayAuto.forEach(function(auto) {
        listAuto += `<li class="list-group-item">${auto.marca} ${auto.modello}</li>`;
    });
        let card = `
    <div class="col">
        <div class="card">
          <div class="card-header">
            Le auto restanti sono: 
          </div>
          <ul class="list-group list-group-flush">
          ${listAuto}
          </ul>
        </div>
      </div>
    `;
    document.getElementById(tipo).innerHTML = card;
}


function addAuto(event) {
    event.preventDefault();

    console.log("AGGIUNTA UN'AUTO!");

    let newMarca = document.getElementById("marca").value;
    let newModello = document.getElementById("modello").value;
    let newAlimentazione = document.getElementById("alimentazione").value;


    let newAuto = {
        marca: newMarca,
        modello: newModello,
        alimentazione: newAlimentazione,
    };

    
        if(newAuto.alimentazione == "benzina") {
            automobiliBenzina.push(newAuto);
            nuovaMacchina(newAuto, "benzina");
        } else if(newAuto.alimentazione == "diesel") {
            automobiliDiesel.push(newAuto);
            nuovaMacchina(newAuto, "diesel");
        } else {
            automobiliRestanti.push(newAuto);
            nuovaMacchina(newAuto, "restanti");
        }
    
};

function nuovaMacchina(newAuto,newTipo) {
    let listAuto = "";
    arrayAuto.forEach(function(newAuto) {
        listAuto += `<li class="list-group-item">${newAuto.marca} ${newAuto.modello}</li>`;
    });
        let card = `
    <div class="col">
        <div class="card">
          <div class="card-header">
            Le auto a  sono:
          </div>
          <ul class="list-group list-group-flush">
          ${listAuto}
          </ul>
        </div>
      </div>
    `;
    document.getElementById(newTipo).innerHTML = card;
}
