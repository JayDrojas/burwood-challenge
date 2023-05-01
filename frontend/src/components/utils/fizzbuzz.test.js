import fizzBuzz from "./fizzBuzz";

test('checks input 14 for fizzbuzz', () => {
    expect(fizzBuzz(14)).toBe(14)
})

test('checks input 15 for fizzbuzz', () => {
    expect(fizzBuzz(15)).toBe('FizzBuzz')
})

test('checks input 9 for fizzbuzz', () => {
    expect(fizzBuzz(9)).toBe('Fizz')
})

test('checks input 5 for fizzbuzz', () => {
    expect(fizzBuzz(5)).toBe('Buzz')
})