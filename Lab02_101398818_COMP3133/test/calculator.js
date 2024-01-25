const assert = require('assert');
const Calculator = require('../app/calculator.js');

describe('Calculator Add Function', () => {
    it('should return 7 when the value is 5 + 2', () => {
        assert.equal(Calculator.add(5, 2), 7);
    });

    it('should return 7 when the value is 5 + 1', () => {
        assert.equal(Calculator.add(5, 2), 8);
    });
});

describe('Calculator substractor Function', () => {
    it('should return 3 when the value is 5 - 2', () => {
        assert.equal(Calculator.sub(5, 2), 3);
    });

    it('should return 3 when the value is 5 - 2', () => {
        assert.equal(Calculator.sub(5, 2), 5);
    });
});

describe('Calculator multiplication Function', () => {
    it('should return 10 when the value is 5 * 2', () => {
        assert.equal(Calculator.mul(5, 2), 10);
    });

    it('should return 10 when the value is 5 + 1', () => {
        assert.equal(Calculator.mul(5, 2), 12);
    });
});

describe('Calculator div Function', () => {
    it('should return 5 when the value is 10 / 2', () => {
        assert.equal(Calculator.div(10, 2), 5);
    });

    it('should return 5 when the value is 10 / 2', () => {
        assert.equal(Calculator.div(5, 2), 2);
    });
});