class Calculator {
    constructor() {
        this.total = 0;
    }

    get version() {
        return '0.1';
    }

    add(number) {
        return this.total += number;
    }
    subtract(number) {
        return this.total -= number;
    }
    multiply(number) {
        return this.total *= number;
    }
    divide(number) {
        if (number === 0) {
            throw new Error('Cannot divide by zero');
        }
        return this.total /= number;
    }
}

Object.defineProperty(Calculator.prototype, 'version', {
    enumerable: true,
    configurable: true
})