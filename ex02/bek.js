function bek(p1, p2) {
    if (p1 > p2 && p1 < 100) {
        return p1;
    }else if (p1 < p2 && p2 < 100) {
        return p2;
    }
}
console.log(bek(99, 95))