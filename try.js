class human {
    constructor(name,age){
        this.name = name
        this.age = age
    }
    getName(){
        return `my name is ${this.name}`
    }
    getAge(){
        return `${this.age}`
    }
}

const x = new human("jorda",25)
console.log(x.getName())
console.log(x.getAge())