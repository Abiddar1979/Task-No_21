/* Task # 21 : They think of something you could store in a typesript object .
write a program that creates objects containing these items.*/

interface type {
    Name:string, Age:number, Profession:string
}

let OBJ:type = {Name:`Asad`,Age:100 , Profession:`Doctor`};

console.log(`\n Object Containing information About me :\n`);
console.log(`My Name is : ${OBJ.Name}`);
console.log(`I am ${OBJ.Age} Year old`);
console.log(`I am a ${OBJ.Profession}`);