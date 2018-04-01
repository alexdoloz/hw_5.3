function add(numbers) {
    if (numbers === "") { return 0; }
    const match = /\/\/<(.+)>\n(.+)/g.exec(numbers);
    const delimiter = (match && match[1]) ?
        match[1] :
        /[\n,]+/;
    if (match && match[2]) {
        numbers = match[2];
    }
    let negativeNumbers = [];
    const convertedNumbers = numbers
        .split(delimiter)
        .map(s => {
            if (s === "") { throw new Error("wrong input."); }
            const num = Number(s);
            if (num < 0) { negativeNumbers.push(num); }
            return Number(s);
        })
        
    if (negativeNumbers.length > 0) {
        throw new Error(`Отрицательные числа не допустимы. ${negativeNumbers.join(',')}`);
    }
    return convertedNumbers.reduce((acc, current) => acc + current, 0);
}


module.exports = add;