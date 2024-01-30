import { lfxChallenge } from "./function";

describe('lfxChallenge Function', () => {
    test('it should handle a valid list', () => {
        const input = "1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20";
        expect(lfxChallenge(input)).toStrictEqual([1, 5, 7, 11, 13, 17, 19]);
    });

    test('it should throw an error for an invalid list length', () => {
        const invalidInput = "1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19";
        expect(() => lfxChallenge(invalidInput)).toThrowError("List is not a multiple of 10 in length");
    });

    test('it should handle a string with only even numbers', () => {
        const evenInput = "2 4 6 8 10 12 14 16 18 20";
        expect(lfxChallenge(evenInput)).toStrictEqual([2, 10, 14]);
    });

    test('it should handle a string with only odd numbers', () => {
        const oddInput = "1 3 5 7 9 11 13 15 17 19";
        expect(lfxChallenge(oddInput)).toStrictEqual([1, 9, 13]);
    });

    test('it should handle a string with all numbers divisible by 2 or 3', () => {
        const divisibleInput = "2 3 6 8 9 12 14 15 18 20";
        expect(lfxChallenge(divisibleInput)).toStrictEqual([2, 9, 14]);
    });

    test('it should handle a string with mixed even and odd numbers', () => {
        const mixedInput = "1 2 3 4 5 6 7 8 9 10";
        expect(lfxChallenge(mixedInput)).toStrictEqual([1, 5, 7]);
    });

    test('it should handle a large array of numbers', () => {
        const largeInput = [...Array(100).keys()].map((num) => (num + 1) * 2).join(" ");
        const expectedOutput = largeInput
            .split(" ")
            .filter((num, index) => (index + 1) % 2 !== 0 && (index + 1) % 3 !== 0)
            .map(Number);

        expect(lfxChallenge(largeInput)).toEqual(expectedOutput);
    });

    test('it should handle a very large array of numbers', () => {
        const largeInput = [...Array(1000000).keys()].map((num) => (num + 1) * 2).join(" ");
        const expectedOutput = largeInput
            .split(" ")
            .filter((num, index) => (index + 1) % 2 !== 0 && (index + 1) % 3 !== 0)
            .map(Number);

        expect(lfxChallenge(largeInput)).toEqual(expectedOutput);
    });


});
