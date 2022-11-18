// Factory

function createObj(name, birthYear, jobTitle) {
    return {
        name,
        birthYear,
        jobTitle,
        getName: function() { return this.name; }
    };
}

var people = createObj("Thales", "1997", "Engineer");
console.log(people);

// Constructor
function createPeople(name, birthYear, jobTitle) {
    this.name = name,
        this.birthYear = birthYear,
        this.jobTitle = jobTitle,
        this.getName = function() {
            return this.name;
        }
}

const peopleConstructor = new createPeople(["Thales", "Castro"], 1997, "Engineer");
console.log(peopleConstructor);


// Classes
class Father {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    sayHello() {
        console.log("Hello");
    }
}

class Daugther extends Father {
    constructor(name, age, jobTitle) {
        super(name, age);
        this.jobTitle = jobTitle;
    }

    sayHello() {
        super.sayHello(); // Chama a função do pai
        console.log(", World!");
    }
}

// Estaticos

class Validador {
    static validar(example) {
        return example == 10;
    }
}

Validador.validar(10);

// Encapsulamento