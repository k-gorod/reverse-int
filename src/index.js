module.exports = function reverse (n) {
    var n2 = n.toString().split("").reverse();
    n="";
    n2.forEach(e => {
        n+=e;
    });
    return parseInt(n,10);
}
