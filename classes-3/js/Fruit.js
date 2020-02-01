class Fruit {

    constructor(name, price) {
        this.price = price;
        this.name = name;
    }

    get price() {
        return this.price;
    }

    set price(val) {
        if (val <= 0 ){
            alert("Value must be greater than 0.");
            return;
        }
        this._price = val;
    }

    get name() {
        return this.name;
    }

    set name(input) {
        if (input.match(/^[^a-zA-Z]+$/)) {
            console.log('The test is true');
        }
        else {
            console.log('The test is false');
        }
        
        this._name = name;
    }
}