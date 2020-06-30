function sum(a) {
    return a.reduce((s, c)=> s+c);
}

function multiply(a) {
    return a.reduce((s, c)=> s*c);
}

function reverse(a) {
    return a.split("").reverse().join();
}

function filterLongWords(a, i) {
    return a.filter(s => s.length > i);
}

describe("sum", function() {

    it("Sums an array of numbers", function() {
        assert.equal(sum([2, 3, 2, 4, 9]), 20);
        assert.equal(sum([3, 4]), 7);
    });

});

describe("multiply", function() {

    it("Multiplies an array of numbers", function() {
        assert.equal(multiply([2, 3, 2, 4]), 48);
        assert.equal(multiply([3, 4]), 12);
    });

});

describe("reverse", function() {

    it("Reverses a string", function() {
        assert.equal(reverse("mayor"), "r,o,y,a,m");
        assert.equal(reverse("bloomberg"), "g,r,e,b,m,o,o,l,b");
    });

});

describe("filterLongWords", function() {

    it("returns an array of strings that are higher in length than i", function() {
        assert.equal(filterLongWords(["Mohammed", "Gameal", "Elabed", "Elmatary"], 6), ["Mohammed", "Elmatary"]);
        assert.equal(filterLongWords(["Maharishi", "International", "University"], 9), ["International", "University"]);
    });

});