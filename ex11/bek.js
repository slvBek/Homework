function bek(p1, p2, p3) {
    if(p1 === p2 && p2 === p3 && p3 === p1) {
        return 30; 
    }else if(p1 != p2 && p2 === p3 && p1 != p3 || p1 != p2 && p2 != p3 && p1 === p3 || p1 === p2 && p2 != p3 && p3 != p1){
        return 40;
    }else{
        return 20;
    }
}
console.log(bek(10, 10, 10))