function bek(p1, p2) { 
    if(p1 >= 40 && p1 <= 60 && p2 >= 40 && p2 <= 60) { 
        return true; 
    }else if(40 <= p1 <= 60 && 70 <= p2 <= 100 || 70 >= p1 <= 100 && 40 <= p2 >= 60) { 
        return false; 
    } 
} 
console.log(bek(50, 89));