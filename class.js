class Car {
    #mark;
    #model;
    #mileage;
    constructor(mark, model, mileage){
        if(typeof mark !== 'string' || mark.trim() === '') throw new Error('mark must be a non-empty string');
            this.#mark = mark;
        if(typeof model !== 'string' || model.trim() === '') throw new Error('model must be a non-empty string');
            this.#model = model;
        if(typeof mileage !== 'number' || mileage < 0) throw new Error('mileage must be a number');
            this.#mileage = mileage;       
    }

    set mileage(amount){
        this.#mileage = amount;
    }
    get mileage(){
        return this.#mileage;
    }

    info(){
        return console.log(`Марка: ${this.#mark}, Модель: ${this.#model}, Пробег: ${this.#mileage}`);
    }
}


const car1 = new Car('Porsche','Macan', 10000)
console.log(car1.info());
car1.mileage=500;
car1.mileage;