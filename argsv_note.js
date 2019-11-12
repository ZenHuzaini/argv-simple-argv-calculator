const fungsi = function (decide, input1, input2) {
    const input_1 = Number(input1);
    const input_2 = Number(input2);
    if (decide == 'plus') {
        const result = input_1 + input_2;
        return result;
    } else if (decide == 'divide') {
        const result = input_1 / input_2;
        return result;
    } else {
        const result = input_1 - input_2;
        return result;
    }
}

module.exports = { fungsi: fungsi }

