const { expect } = require('chai');
const add = require('../calculator.js');

describe('function add', () => {
    it('returns 0 on empty string', () => {
        expect(add('')).to.be.equal(0);
    });

    it('returns x on string "x", x from 0...2', () => {
        for (var x = 0; x <= 2; x++) {
            expect(add(String(x))).to.be.equal(x);
        }
    });

    it('returns 3 on "1,2"', () => {
        expect(add("1,2")).to.be.equal(3);
    });

    it('returns 9 on "3,3,3"', () => {
        expect(add("3,3,3")).to.be.equal(9);
    });

    it('returns 6 on "1\n2,3"', () => {
        expect(add("1\n2,3")).to.be.equal(6);
    }); 
    
    it('"1,\n" is bad input', () => {
        expect(add.bind(null, "1,\n")).to.throw();
    });

    it('can set delimiter', () => {
        // console.log(add("//<;>\n1;2"));
        expect(add("//<;>\n1;2")).to.be.equal(3);
    });  

    it('throws at negative numbers', () => {
        // console.log(add("1,2,-1,5"));
        expect(add.bind(null, "1,2,-1,5")).to.throw(`Отрицательные числа не допустимы. ${-1}`);
    });

    it('collects all negative numbers and adds to error message', () => {
        expect(add.bind(null, "1,3,4,5,-1,2,-2\n-3")).to.throw(`Отрицательные числа не допустимы. -1,-2,-3`);
    });
});

