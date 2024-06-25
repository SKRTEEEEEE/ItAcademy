import { add, subtract, multiply, divide, isEven } from './index';

//adds, subtracts, multiplies, divides, (error for divides with 0 and isEven function)

test("adds 3 + 1 = 4", ()=>{
    expect(add(3, 1)).toBe(4)
} )

test("subtract 5 - 2 = 3", ()=>{
    expect(subtract(5, 2)).toBe(3)
})

test("multiply 2 times 3 = 6", () =>{
    expect(multiply(2, 3)).toBe(6)
})

test("divide 6/2 = 3", ()=>{
    expect(divide(6, 2)).toBe(3)
})
//Asi probamos que funcione el throw, lógicamente, saltara el throw en el test
test("Throw an error when divide by 0", ()=>{
    expect(divide(6, 0)).toThrow('Division by zero')
    
})

test('returns true for even numbers', () => {
    expect(isEven(2)).toBe(true);
});

test('returns false for odd numbers', () => {
    expect(isEven(3)).toBe(false);
});
