const mapArrToString = require('./mapArrToString')


describe('mapArrToStrings', () => {
    test('Correct value', () => {
        expect(mapArrToString([1, 2, 3])).toEqual(['1', '2', '3'])
    })
    test('Mixed values', () => {
        expect(mapArrToString([1, 2, 3, null, undefined, 'abc'])).toEqual(['1', '2', '3'])
    })
    test('Empty arr', () => {
        expect(mapArrToString([])).toEqual([])
    })
    test('Uncorrect', () => {
        expect(mapArrToString([1, 2, 3])).not.toEqual(['1', '2', '3', '4'])
    })
})