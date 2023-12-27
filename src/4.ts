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
    
 }


const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);


export {};