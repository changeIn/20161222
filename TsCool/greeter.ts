
class Student {
    fullName:string;
    constructor(public firstName,public middleIntial,public lastName){
        this.fullName = firstName + " " + middleIntial + " " + lastName;
    }
}


interface Person{
    firstName:string;
    lastName:string;
    middleIntial:string;

}




function greeter(person:Person) {
    return "Hello, " + person.firstName + person.middleIntial+ person.lastName;
}

// let user = {firstName:"Jean",lastName:"King"};
let user =new Student("Jane" ,"M." ,"User")

document.body.innerHTML = greeter(user);