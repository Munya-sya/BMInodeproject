const{calculate,diagnose} = require('./public/js/home');

test('51/(0.5*0.5)', () =>{
    expect(calculate(1,0.5)).toBe(0.5);
});


test.each([[1,0.5,0.5]])(
    '%i /(%i * %i )equals %i', (a, b, expected) => {
        expect(calculate(a,b)).toBe(expected);
    }

);

test('0.5', () =>{
    expect(diagnose(0.5)).toBe("Under Weight");
});
test('21', () =>{
    expect(diagnose(21)).toBe("Normal Weight");
});
test('25', () =>{
    expect(diagnose(25)).toBe("Over Weight");
});
test('40', () =>{
    expect(diagnose(40)).toBe("Obese");
});