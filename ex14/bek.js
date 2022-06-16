function bek(p1, p2, p3) {
    return (p1 >= 20 && (p1 < p2 || p1 < p3)) || (p2 >= 20 && (p2 < p1 || p2 < p3)) || (p3 >= 20 && (p3 < p2 || p3 < p1))
}

console.log(bek(23, 45, 10))
console.log(bek(23, 23, 10))