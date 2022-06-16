function bek(p1, p2, p3) { 
    if (p1 >= p2 && p1 >= p3) { 
        return p1; 
    }else if(p2 >= p3 && p2 >= p1){ 
        return p2; 
    }else{ 
        return p3; 
    } 
} 
console.log(bek(1000, 510, 440));