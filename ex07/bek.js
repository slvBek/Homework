function bek(p1) {
    if(p1.length < 3) {
        return p1.toUpperCase();
    }
    b = (p1.substring(0, 3)).toLowerCase();
    c = p1.substring(3, p1.length);
    return b + c;
}
console.log(bek("PYTHON"))