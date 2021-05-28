function updateDom() {
    container2.innerText = '';
    for (const product of list) {
        console.log(product);

        let tr = document.createElement('tr');
        let name = document.createElement('td');
        let quantity = document.createElement('td');
        let buyHt = document.createElement('td');
        let sellHt = document.createElement('td');
        let margin = document.createElement('td');
        let sellTtc = document.createElement('td');
        let type = document.createElement('td');
        let degree = document.createElement('td');
        let btnEdit = document.createElement('img');
        let btnSup = document.createElement('img');
        let btnPlus = document.createElement('img');
        let btnMoins = document.createElement('img');

        quantity.setAttribute("id", "qtt");//test
        btnPlus.setAttribute("id", "btnPlus");
        btnMoins.setAttribute("id", "btnMoins");
        btnSup.setAttribute("id", "btnSup");
        btnEdit.setAttribute("id", "btnEdit")

        if (product instanceof Alcool) {
            degree.innerText = `${product.degree}°`;
        } else {
            degree.innerText = 'Sans alcool';
        }

        name.innerText = `${product.nom}`;
        quantity.innerText = parseInt(`${product.quantity}`);
        buyHt.innerText = `${product.buyHt} €`;
        sellHt.innerText = `${product.sellHt} €`;
        margin.innerText = `${product.margin} €`;
        sellTtc.innerText = `${product.sellTtc} €`;
        type.innerHTML = `${product.type}`;
        btnEdit.src = "./img/edit.svg";
        btnSup.src = "./img/trash.svg";
        btnMoins.src = "./img/minus.svg";
        btnPlus.src = "./img/add.svg";

        tr.appendChild(name);
        tr.appendChild(quantity);
        tr.appendChild(btnMoins);
        tr.appendChild(btnPlus);
        tr.appendChild(buyHt);
        tr.appendChild(sellHt);
        tr.appendChild(margin);
        tr.appendChild(sellTtc);
        tr.appendChild(type);
        tr.appendChild(degree);
        tr.appendChild(btnSup);
        tr.appendChild(btnEdit);
        container2.appendChild(tr);


        //Boutton de suppression du produit.
        btnSup.addEventListener('click', function (e) {
            deleteElement(product);
            updateDom()
        });

        //boutton de modif du produit entré
        btnEdit.addEventListener('click', function (e) {
            /*name.contentEditable = "true";//modifier le contenue directement.
            name.focus();*/    //pas de solution pour changer content editable...
            name.innerText = "";
            let inputName = document.createElement("input");
            name.appendChild(inputName);
            inputName.focus();
            inputName.addEventListener('change', function (e) {
                product.nom = inputName.value;
                inputName.style.display = "none";
                save();
                updateDom();
            })
        });


        btnPlus.addEventListener('click', function (e) {
            quantity.innerText = parseInt(quantity.innerText) + 1;
            product.quantity++;
            save();
            updateDom();
        });
        btnMoins.addEventListener('click', function (e) {
            if (quantity.innerText > 0) {
                quantity.innerText = parseInt(quantity.innerText) - 1;
                product.quantity--;
                save();
                updateDom();
            } else { }
        });

        if (quantity.innerText <= 6) {
            tr.style.backgroundColor = "red";
        } else if
            (quantity.innerText > 6 && quantity.innerText <= 15) {
            tr.style.backgroundColor = "orange";
        } else if (quantity.innerText > 15) {
            tr.style.backgroundColor = "green";
        } else { };
    }
};




