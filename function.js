function deleteElement(elem) {
    let index = list.findIndex(function (product) {
        return product.id === elem.id;
    });
    list.splice(index, 1);
}

//sauvegarder en local storage
function save() {
    localStorage.setItem('list', JSON.stringify(list));
};


function load() {
    let listInit = localStorage.getItem("list");
    if (listInit) {
        let listIniT = JSON.parse(listInit);
        listIniT.forEach(element => {
            if (element.degree) {
                let Stock = new Alcool(element.nom, element.quantity, element.buyHt, element.sellHt, element.margin, element.sellTtc, element.type, element.degree);
                list.push(Stock);
            } else {
                let Stock = new Produits(element.nom, element.quantity, element.buyHt, element.sellHt, element.margin, element.sellTtc, element.type);
                list.push(Stock);
            }
        })
        updateDom()
    }
};

function remove() {
    localStorage.removeItem('list');
};