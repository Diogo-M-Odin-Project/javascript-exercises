const reverseString = function(string) {
    let splitString = string.split("");
    let reverseArray = splitString.reverse();
    var revertedString = reverseArray.join("")
    return revertedString;
};

// Do not edit below this line
module.exports = reverseString;
