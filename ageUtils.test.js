// ageUtils.test.js
const { isAdult } = require('./ageUtils');

test('debería devolver true si la persona tiene más de 18 años', () => {
    expect(isAdult(20)).toBe(true);
});

test('debería devolver false si la persona tiene menos de 18 años', () => {
    // Tambien podria ser asi
    /**
     * const age = 14;
     * expect(isAdult(age)).toBe(false);
     */
    expect(isAdult(17)).toBe(false)
});

test('debería devolver true si la persona tiene exactamente 18 años', () => {
    expect(isAdult(18)).toBe(true);
})
