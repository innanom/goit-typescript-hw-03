class Key {
    private signature: number;

    constructor() {
        this.signature = Math.random();

    }

    getSignature(): number {
        return this.signature;
    }
}

class Person {
    constructor(private key: Key) { }
    
    getKey(): Key {
        return this.key;
    }
}
abstract class House {
    protected door: boolean = false;
    private tenants: Person[] = [];

    constructor(protected key: Key) { }

    comeIn(person: Person): void {
        if (this.door) {
            this.tenants.push(person);
            console.log ("The door is opened ")

        } 
        else {
            console.log ("The door is closed ")
        }
    }
    
    abstract openDoor(key: Key): void;
}
 
class MyHouse extends House {
        openDoor(key: Key): void {
            if (key.getSignature() === this.key.getSignature()) {
                this.door = true;
                console.log("The key is accepted");
            } else {
                this.door = false;
                console.log("invalid key");
            }

 }}


const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);


export {};