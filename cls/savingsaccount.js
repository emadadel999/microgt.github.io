class Savingsaccount extends Account {

    constructor(number, interest) {
        super(number);
        this._interest = interest;

    }

    setInterest(interest){
        this._interest = interest;
    }
    getInterest(){
        return this._interest;
    }
    addInterest(){
        let calculatedInerest = this._balance * this._interest / 100;
        this.deposite(calculatedInerest);
    }

    toString() {
        return "Savings Account " + this._number + ": balance " + this._balance + " Interest: " + this._interest;
    }

    endOfMonth(){
        this.addInterest();
        return "Interest added: " + toString();
    }

}