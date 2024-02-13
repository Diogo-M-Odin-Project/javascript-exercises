const removeFromArray = function(array) {
    const args = Array.prototype.slice.call(arguments, 1);
    for (let i = 0; i < args.length; i++) {
        array = array.filter(function(e) { return e !== args[i] })
        /*
        let j = 0;
        let found = false;
        while (j < array.length && !found) {
            if (args[i] === array[j]) {
                array.splice(j, 1);
                found = true;
            }
            j++;
        }
        */
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
