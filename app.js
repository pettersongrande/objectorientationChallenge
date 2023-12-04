class Triangle {
    constructor(a,b,c){
        
    for(let side of [a,b,c]){

        if(!Number.isFinite(side) || side <= 0){
        throw new Error("Sides must be positive numbers!");
        }

    }
    
    // if(!Number.isFinite(a) || a <= 0){
    //     throw new Error("Sides must be positive numbers!");
    // }
    // if(!Number.isFinite(b)|| b <= 0){
    //     throw new Error("Sides must be positive numbers!");
    // }
    // if(!Number.isFinite(c) || c <= 0){
    //     throw new Error("Sides must be positive numbers!");
    // }
    this.a = a;
    this.b = b;
    this.c = c;
    }
    greet() {
        console.log("Hello from Triangle!!!");
    }
    display(){
        console.log(`Triangle with sides of ${this.a}, ${this.b},and ${this.c}`);
    }
}

