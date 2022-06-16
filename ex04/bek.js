function bek(p1, p2) {
    if(p1 >= 40 && p1 <= 60 || p2 >= 40 && p2 <= 60) {
        return p2;
    }else if(p1 <= 40 && p1 >= 60 || p2 <= 40 && p2 >= 60) {
        return p1;
    }
}
console.log(bek(45, 60))