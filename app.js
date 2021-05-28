let container = document.getElementById("container");
let container1 = document.getElementById("container1");
let container2 = document.getElementById("container2");
let nom = document.getElementById("name");
let quantity = document.getElementById("quantity");
let achatHt = document.getElementById("achatHt");
let venteHt = document.getElementById("venteHt");
let type = document.getElementById("type");
let degree = document.getElementById("degree");
let btnAdd = document.getElementById("btnAdd");
let divnom = document.getElementsByClassName("nom");
let margeCalc = document.getElementById("margeCalc");
let pdvCalc = document.getElementById("pdvCalc");
let list = [];
let btnClear = document.getElementById("btnClear");

btnAdd.setAttribute("id", "btnAdd");

load();

//calcul et affichage de la marge dans le container1
venteHt.addEventListener("change", function (e) {
    margeCalc.value = parseFloat(venteHt.value - achatHt.value);
});

//calcul et affichage du pdv ttc 
venteHt.addEventListener("change", function (e) {
    pdvCalc.value = Math.floor(venteHt.value * 1.2 * 100) / 100;
});


//fonctionalité du boutton ajoutter produit
btnAdd.addEventListener("click", function () {
    if (type.value != "alcool") {
        let product = new Produits(nom.value, quantity.value, achatHt.value, venteHt.value, venteHt.value - achatHt.value, Math.floor(venteHt.value * 1.2 * 100) / 100, type.value);
        list.push(product);
    } else {
        let product = new Alcool(nom.value, quantity.value, achatHt.value, venteHt.value, venteHt.value - achatHt.value, Math.floor(venteHt.value * 1.2 * 100) / 100, type.value, degree.value);
        list.push(product);
    }
    save();
    updateDom();
});

btnClear.addEventListener("click", function (e) {
    remove()
});



