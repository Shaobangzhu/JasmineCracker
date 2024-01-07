describe('calculator.js', function(){

    it('should add numbers to total', function() {
        const calculator = new Calculator();
        calculator.add(5);

        expect(calculator.total).toBe(5);
    });

    it('should subtract numbers from total', function() {
        const calculator = new Calculator();
        calculator.add(5);
        calculator.subtract(2);

        expect(calculator.total).toBe(3);
    });

    it('should multiply total by number', function() {
        const calculator = new Calculator();
        calculator.add(5);
        calculator.multiply(3);

        expect(calculator.total).toBe(15);
    });

    it('should divide total by number', function() {
        const calculator = new Calculator();
        calculator.add(25);
        calculator.divide(5);

        expect(calculator.total).toBe(5);
    });

    // toBe "==="
    it('should initialize the total', function() {
        const calculator = new Calculator();

        expect(calculator.total).toBe(0);
    });

    // toEqual, Deep equality, two different objects
    // but the values of total are the same so it compares the variable in the constructor
    it('has constructor', function() {
        const calculator1 = new Calculator();
        const calculator2 = new Calculator();

        expect(calculator1).toEqual(calculator2);
    });

    // toBeTruthy and toBeFalsy
    it('can be instantiated', function() {
        const calculator1 = new Calculator();
        const calculator2 = new Calculator();

        expect(calculator1).toBeTruthy();
        expect(calculator2).toBeTruthy();
    });

    // Negating matchers
    it('instantiates unique object', function() {
        const calculator1 = new Calculator();
        const calculator2 = new Calculator();

        expect(calculator1).not.toBe(calculator2);
    });

    // toBeDefined, toBeUndefined
    it('has common operations', function() {
        const calculator = new Calculator();

        expect(calculator.add).toBeDefined();
        expect(calculator.subtract).toBeDefined();
        expect(calculator.multiply).toBeDefined();
        expect(calculator.divide).toBeDefined();
    });

    // toBeNull
    it('can overwrite total', function() {
        const calculator = new Calculator();

        calculator.total = null;
        expect(calculator.total).toBeNull();
    });

    // toContain
    it('can contain a substring', function() {
        const calculator = new Calculator();

        expect(calculator.constructor.name).toContain("Calc");
    });

    // toBeNaN
    it('does not handle NaN', function() {
        const calculator = new Calculator();

        calculator.total = 20;
        calculator.multiply('a');

        expect(calculator.total).toBeNaN();
    });

    // toThrow toThrowError
    it('handles divide by zero', function() {
        const calculator = new Calculator();

        expect(function() { calculator.divide(0) }).toThrowError(Error, 'Cannot divide by zero');
    });

    // toMatch
    it('returns total', function() {
        const calculator = new Calculator();
        calculator.total = 50;

        expect(calculator.add(20)).toBe(70);
        expect(calculator.total).toMatch(/-?\d+/);
    });

    // custom-matchers
    it('custom to be calculator', function() {
        jasmine.addMatchers(customMatchers);
        const calculator = new Calculator();

        expect(calculator).toBeCalculator();
    });
});