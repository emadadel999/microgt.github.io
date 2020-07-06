class Bank {

    constructor() {
        this._accounts = new Array(0);
    }

    getAccounts(){
        return this._accounts;
    }

    static getNextNumber(a){
        return a.length +1;
    }

    addAccount(){
        let _acc = new Account(Bank.getNextNumber(this._accounts));
        this._accounts.push(_acc);
        return _acc.getNumber();
    }
    addSavingsAccount(interest){
        let _sAcc = new Savingsaccount(Bank.getNextNumber(this._accounts), interest);
        this._accounts.push(_sAcc);
        return _sAcc.getNumber();
    }
    addCheckingAccount(overdraft){
        let _cAcc = new CheckingAccount(Bank.getNextNumber(this._accounts), overdraft);
        this._accounts.push(_cAcc);
        return _cAcc.getNumber();
    }
    closeAccount(number){
        if(this._accounts[number]){
            this._accounts.splice(number);
            return "Account Closed.";
        }else {
            return "Account Not Found.";
        }
    }
    accountReport(){
        let result = "";
        for (let i = 0; i < this._accounts.length; i++) {
            result = result + this._accounts[i].toString() + '\n';
        }
        return result;
    }
    endOfMonth(){
        let result = "";
        for(let i = 0; i < this._accounts.length; i++){
            result = result + this._accounts[i].endOfMonth();
        }
        return result;
    }
}