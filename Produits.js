class Produits {
    constructor(nom, quantity, buyHt, sellHt, margin, sellTtc, type) {
        this.nom = nom;
        this.quantity = quantity;
        this.buyHt = buyHt;
        this.sellHt = sellHt;
        this.margin = margin;
        this.sellTtc = sellTtc;
        this.type = type;
        this.id = nom + Date.now();
    }
};

class Alcool extends Produits {
    constructor(nom, quantity, buyHt, sellHt, margin, sellTtc, type, degree) {
        super(nom, quantity, buyHt, sellHt, margin, sellTtc, type)
        this.degree = degree;
        this.id = nom + Date.now();
    }
};