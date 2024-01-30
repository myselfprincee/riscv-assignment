export const lfxChallenge = (int) => {
    const intArr = int.split(" ").map(Number);
    if (intArr.length % 10 !== 0) {
        throw new Error("List is not a multiple of 10 in length")
    } else {
        const filteredArr = intArr.filter((num, index) => (index + 1) % 2 !== 0 && (index + 1) % 3 !== 0);
        return filteredArr;
    }
};