    let myAcc = new Account(5000);

    describe("myAcc.getNumber", function() {

        it("Gets account number", function() {
            assert.equal(myAcc.getNumber(), 5000);
        });

    });

    myAcc.deposit(10000);
    myAcc.withdraw(3000);

    describe("myAcc.getBalance", function() {

        it("Gets account balance", function() {
            assert.equal(myAcc.getBalance(), 7000);
        });
    });

    describe("myAcc.toString", function() {

        it("Gets account info", function() {
            assert.deepEqual(myAcc.toString(), "Account 5000: balance 7000");
        });

    });

    let mySavings = new Savingsaccount(7000, 25);

    describe("mySavings.getInterest", function () {
        it("Gets the interest for the account", function () {
            assert.equal(mySavings.getInterest(), 25);
        });
    });

    describe("mySavings.toString", function() {

        it("Gets Savings Account info", function() {
            assert.deepEqual(mySavings.toString(), "Savings Account 7000: balance 0 Interest: 25");
        });

    });

    let myChecking = new CheckingAccount(9000, 250);

    describe("myCheckingAccount.getOverdraftLimit", function () {
        it("Gets the overdraft limit of the account", function () {
            assert.equal(myChecking.getOverdraftLimit(), 250);
        });
    });

    describe("myChecking.toString", function() {

        it("Gets Checking Account info", function() {
            assert.deepEqual(myChecking.toString(), "Checking Account 9000: balance 0 Overdraft Limit: 250");
        });

    });

    let myBank = new Bank();

    describe("myBank.addAccount", function() {

        it("Adds an account to the accounts array", function() {
            assert.equal(myBank.addAccount(), 1);
            assert.equal(myBank.addAccount(), 2);
        });
    });

    describe("myBank.addSavingsAccount", function() {

        it("Adds a savings account to the accounts array", function() {
            assert.equal(myBank.addSavingsAccount(15), 3);
        });
    });

    describe("myBank.addCheckingAccount", function() {

        it("Adds a Checking account to the accounts array", function() {
            assert.equal(myBank.addCheckingAccount(750), 4);
        });
    });

    describe("myBank.closeAccount", function() {

        it("Closes an account with a given number", function() {
            assert.deepEqual(myBank.closeAccount(2), "Account Closed.");
        });
    });

    describe("myBank.accountReport", function() {

        it("Prints a report with all accounts", function() {
            assert.deepEqual(myBank.accountReport(), "This is not working properly....");
        });
    });

    describe("myBank.endOfMonth", function() {

        it("Prints a report with the end of month states of all accounts", function() {
            assert.deepEqual(myBank.endOfMonth(), "Neither is this....");
        });
    });

