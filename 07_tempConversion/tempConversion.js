const ftoc = function(temp) {
    let resultc = ((temp - 32) * (5/9));
    let roundedc = Math.round(resultc * 10) / 10
    return roundedc;
};

const ctof = function(temp2) {
    let resultf = (temp2 * (9/5) + 32)
    let roundedf = Math.round(resultf * 10) / 10
    return roundedf;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
