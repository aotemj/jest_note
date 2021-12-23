const {calculateSalary} = require('../src/demo1')

test('calculateSalary 1200', () => {
    expect(calculateSalary(1200)).toBe(1200 * 3)
})

test('calculateSalary 999', () => {
    expect(calculateSalary(999)).toBe(999 * 2)
})