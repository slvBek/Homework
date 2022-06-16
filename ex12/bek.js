function bek(p1, p2, p3) {
    if(p2 > p1 && p3 > p2) {
        return "Строгий режим"
    }else if(p3 > p2) {
        return "Мягкий режим"
    }
}
console.log(bek(10, 15, 31))
console.log(bek(24, 22, 31))
console.log(bek(22, 22, 31))