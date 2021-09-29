function cityTaxes(name, population, treasury) {
    const myObj = {
        name,
        population,
        treasury,
        taxRate: 10,
        collectTaxes,
        applyGrowth,
        applyRecession
    }

    function collectTaxes() {
        return this.treasury += Math.floor(this.population * this.taxRate);
    }

    function applyGrowth(percentage) {
        return this.population += Math.floor(this.population * percentage / 100);
    }

    function applyRecession(percentage) {
        return this.treasury -= Math.ceil(this.treasury * percentage / 100);
    }
    return myObj;

}

const city =
    cityTaxes('Tortuga',
        7000,
        15000);
console.log(city);