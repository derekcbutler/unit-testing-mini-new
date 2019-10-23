import { add } from '../utils/functions';


describe('add function works', () => {
    test('adding two numbers gives the sum of both numbers', () => {
        expect(add(1,2)).toBe(3)
    })
    test('adding two number strings equals the sum of both numbers', () => {
        expect(add('3', '4')).toBe(7)
    })
    test(`add two string and get NaN if they are not numbers`, () => {
        expect(add('hello', 'world')).toBeNaN()
    })
})