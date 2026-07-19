import { Sum } from "../sum";

test('Sum function should calculate the sum of two function', () => {
    const result = Sum(3,4);

    expect(result).toBe(7);
})