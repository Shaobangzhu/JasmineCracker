describe('main.js', function() {
    describe('calculate()', function() {


        it('STUB: validates expression when the first number is invalid', function() {
            spyOn(window, 'updateResult').and.stub();

            calculate('a+3');

            expect(window.updateResult).toHaveBeenCalled();
        });

        it('STUB: validates expression when the second number is invalid', function() {
            spyOn(window, 'updateResult').and.stub();

            calculate('3+a');

            expect(window.updateResult).toHaveBeenCalled();
        });

        it('STUB: validates expression when the operation is invalid', function() {
            spyOn(window, 'updateResult').and.stub();

            calculate('3_4');

            expect(window.updateResult).toHaveBeenCalled();
        });

        it('validates expression when the first number is invalid', function() {
            spyOn(window, 'updateResult').and.stub();

            calculate('a+3');

            expect(window.updateResult).toHaveBeenCalled();
        });

        it('validates expression when the second number is invalid', function() {
            spyOn(window, 'updateResult').and.stub();

            calculate('3+a');

            expect(window.updateResult).toHaveBeenCalled();
        });

        it('validates expression when the operation is invalid', function() {
            spyOn(window, 'updateResult').and.stub();

            calculate('3_4');

            expect(window.updateResult).toHaveBeenCalled();
        });

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
            const element = document.createElement('div');
            element.setAttribute('id', 'result');

            document.body.appendChild(element);
            this.element = element;
        });

        // Clean-up the element created
        afterAll(function() {
            document.body.removeChild(this.element);
        });

        it('adds result to DOM element', function() {
            updateResult('5');

            expect(this.element.innerText).toBe('5');
        });
    });
});