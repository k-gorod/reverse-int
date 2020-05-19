module.exports = function reverse (n) {
    var n2 = n.toString().split("").reverse();
    return parseInt(n2.join(""),10);
}
