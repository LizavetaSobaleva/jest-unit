const validateValue = require('./validateValue')

test('Validate input value', () => {
    expect(validateValue(50)).toBe(true)
})

describe('Validate value', () => {
    test('Correct value', () => {
        expect(validateValue(50)).toBe(true)
    })
    test('Less than correct', () => {
        expect(validateValue(-1)).toBe(false)
    })
    test('Greater than correct', () => {
        expect(validateValue(101)).toBe(false)
    })
    test('Boarder value down', () => {
        expect(validateValue(0)).toBe(true)
    })
    test('Boarder value up', () => {
        expect(validateValue(100)).toBe(true)
    })
})