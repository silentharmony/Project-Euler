var sequence = function() {

    var a = 0;
    var b = 1;
    var c;
    var x = 0;
    
    
    for(var i = 3; i < 35; i++) {
        
        c = a + b;
        a = b;
        b = c;
        
        if (c % 2 === 0) {
        
        x += c;
            
        }
        
        console.log(x);
    }
    

};

sequence();
