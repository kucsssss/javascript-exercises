const sumAll = function(low, high) {
    let sum = 0;

    if(!Number.isInteger(low) || !Number.isInteger(high)){
        return 'ERROR'
    }


    if(low < 0 || high < 0){
        return 'ERROR'
    }

    if(low > high){
        const temp = low;
        low = high;
        high = temp;
    }

    for (let i = low; i <= high; i++) {
        sum = sum + i;
    }
    return sum
};

// Do not edit below this line
module.exports = sumAll;
