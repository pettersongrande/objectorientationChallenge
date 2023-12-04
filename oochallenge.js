// OO Challenge Exercise

// PART 1

class Vehicle {
    constructor(make, model, year){

    this.a = make;
    this.b = model;
    this.c = year;

    }

    honk(){

        return "Beep!";

    }

    toString(){

        return `The Vehicle is a ${this.a},${this.b} from ${this.c}`;

    }
}

// PART 2
class Car extends Vehicle { 
    constructor(make, model, year) {
    super(make, model, year);
    this.numWheels = 4;
    }
}

// PART 3

class Motorcyle extends Vehicle {
    constructor(make, model, year){
    super(make, model, year);
    this.numWheels = 2;
    }

    revEngine(){
        return "Vroom!"
    }
}

// PART 4

class Garage {

    constructor(capacity){
        this.vehicles = [];
        this.capacity = capacity;
    }

    add(newVehicle) {
        if (!(newVehicle instanceof Vehicle)) {
            return "Only Vehicles are allowed in here!";
        }
        if (this.vehicles.length >= this.capacity) {
            return "Sorry, we're full.";
        }
        this.vehicles.push(newVehicle);
        return "Vehicle added!";
        }
    
}


