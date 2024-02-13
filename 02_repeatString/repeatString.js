const repeatString = function(stringToRepeat, numberOfTimes) {
    let result = "";
    if (numberOfTimes < 0) {
        return "ERROR";
    }
    for (let i = 0; i < numberOfTimes; i++) {
        result += stringToRepeat;
    }
    return result;
};

// Do not edit below this line
module.exports = repeatString;
