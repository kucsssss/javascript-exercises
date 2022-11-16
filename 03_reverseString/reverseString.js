const reverseString = function(str) {
    const revArray = [];
    const length = str.length - 1;

    if(!str || str.length < 2 || typeof str!== 'string') {
        return '';
    }

    for (let i = length; i >= 0; i--) {
        revArray.push(str[i]);     
    }
    return revArray.join('');
};

// Do not edit below this line
module.exports = reverseString;
