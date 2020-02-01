/**
 * 
 */
class Fruit {

    /**
     * 
     * @param {String} name 
     * @param {Number} price 
     */
    constructor(name, price) {
        this.price = price;
        this.name = name;
    }

    /**
     * 
     */
    get price() {
        return this.price;
    }

    /**
     * 
     */
    set price(val) {
        if (val <= 0 ){
            alert("Value must be greater than 0.");
            return;
        }
        this._price = val;
    }

    /**
     * 
     */
    get name() {
        return this.name;
    }

    /**
     * 
     */
    set name(input) {
        // This test checks if the string contains anything other than letters
        if (input.match(/[^a-zA-Z]/)) {
            console.log('The provided string contains bad characters');
            this._name = 'ERROR';
            return;
        }
        
        this._name = input;
    }
}