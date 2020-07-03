String.prototype.filter = function(a) {
    let inp = this.split(" ");
    let res = inp.filter(s => s != a);
    let out = res.join(" ");
    return out;
};

Array.prototype.BubbleSort = function() {
    let len = this.length;
    for (let i = 0; i < len; i++) { //you can also use "for in", so you don't need the variable "len"
        for (let j = 0; j < len; j++) {
            if (this[j] > this[j + 1]) {
                let tmp = this[j];
                this[j] = this[j + 1];
                this[j + 1] = tmp;
            }
        }
    }
    return this;
};

var Person = function() {};
Person.prototype.initialize = function(name, age)
{
    this.name = name;
    this.age = age;
}
Person.prototype.describe = function()
{
    return this.name + ", " + this.age + " years old.";
}


var teacher = function() {
    this.teach = function(subject){
        return this.name + " is now teaching " + subject;
    }
};
teacher.prototype = new Person();



describe("filter", function() {

    it("returns the string after removing all the banned words", function() {
        assert.equal("This house is not nice!".filter("not"), "This house is nice!");
    });
});

describe("BubbleSort", function() {

    it("repeatedly steps through the list to be sorted", function() {
        assert.deepEqual(["Mohammed", "Gameal", "Elabed", "Elmatary"].BubbleSort(), [ "Elabed", "Elmatary", "Gameal", "Mohammed"]);
    });
});


var me = new teacher();
me.initialize("Mohammed", 30);

describe("teach", function() {

    it("returns the teacher name along with the subject they teach", function() {
        assert.equal(me.teach("The art of cheese"), "Mohammed is now teaching The art of cheese");
    });
});
