class CheckingAccount extends Account {

    constructor(number,  overdraftLimit) {
        super(number);
        this._overdraftLimit = overdraftLimit;

    }

    setOverdraftLimit(){
        this._overdraftLimit = overdraftLimit;
    }
    getOverdraftLimit(){
        return this._overdraftLimit;
    }

    withdraw(amount) {
        if (amount <= 0) {
            throw new RangeError("Withdraw amount has to be greater than zero");
        }
        if (amount > (this._balance + this._overdraftLimit)) {
            throw Error("Insufficient funds");
        }
        this._balance -= amount;
    }

    toString() {
        return "Checking Account " + this._number + ": balance " + this._balance + " Overdraft Limit: " + this._overdraftLimit;
    }

    endOfMonth(){
        if(this.balance < 0){
            return "Warning, low balance checking account " + toString();
        }else {
            toString();
        }
    }
}