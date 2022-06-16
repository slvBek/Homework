function bek(p1, p2, p3) { 
    let b = p1.toString().slice(-1); 
    let e = p2.toString().slice(-1); 
    let k = p3.toString().slice(-1); 
    if(b === e && b === k && e === k) { 
        return true; 
    }else{ 
        return false; 
    } 
 
} 
 
console.log(bek(20, 30, 400))