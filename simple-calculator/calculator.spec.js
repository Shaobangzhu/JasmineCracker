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


});