class Billing {
    constructor(amount){
        if(typeof amount !== 'number' || amount <= 0) throw new Error('amount must positive number')
        this.amount = amount;
    }
    
    calculateTotal(){
    }
}

class fixBling extends Billing{
    constructor(amount){
        super(amount)
    }

    calculateTotal(){
        return console.log(this.amount)
    }

}

class hourBling extends Billing{
    constructor(amount){
        super(amount)
    }

    calculateTotal(hour){
        return console.log(this.amount*hour)
    }
}

class itemBling extends Billing{
    constructor(amount){
        super(amount)
    }

    calculateTotal(item){
        return console.log(this.amount*item)
    }
}
new itemBling(10).calculateTotal(10);






// Fixed Billing: Returns the current Amount.
// Hour Billing: Returns Amount, multiplied by the number of hours. The number of hours is passed through the constructor.
// Item Billing: Similar to Hour Billing, but uses the number of items instead of hours.