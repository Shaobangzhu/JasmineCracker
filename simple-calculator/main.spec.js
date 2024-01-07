describe('main.js', function() {
    describe('calculate()', function() {
        xit('validates expression');
        xit('calls add');
        xit('calls subtract');
        xit('calls multiply');
        xit('calls divide');
        xit('validates operation');
        xit('calls updateResults');
    });

    describe('updateResult()', function() {

        let element;

        beforeAll(function() {
            element = document.createElement('div');
            element.setAttribute('id', 'result');

            document.body.appendChild(element);
        });

        // Clean-up the element created
        afterAll(function() {
            document.body.removeChild(element);
        });

        it('adds result to DOM element', function() {
            updateResult('5');

            expect(element.innerText).toBe('5');
        });
    });
});