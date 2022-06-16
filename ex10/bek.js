function bek(p1, p2) {
    if(p1 - p2 == 8 || p1 + p2 == 8 || p2 - p1 == 8) {
        return true;
    }else {
        return false;
    }
}
console.log(bek(24, 32))