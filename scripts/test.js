//OOP
// object literal *
// object constructor

let student1={
    name:"Miles",
    age:99,
    grade:"A",
    music:["Coldplay","Oasis","Keane"],
    address:{
        street:"Av. Palm",
        number:"262",
        zip:"22456",
        city:"San Diego",
        state:"California"
    }
}
console.log(student1.music[1]);

let student2={
    name:"Jasmine",
    age:88,
    grade:"A"
}
console.log(student2);

let starbucks=[
    {
        name:"John",
        type:"Gold",
        stars:100,
        rewards:[]
    },
    {
        name:"Robert",
        type:"Green",
        stars:20,
        rewards:["Frappuccino"]
    },
    {
        name:"Lucia",
        type:"Gold",
        stars:40,
        rewards:[]
    }
];
function displayClients(){
    //mortal solution
    console.log(starbucks[0].name);
    console.log(starbucks[1].name);
    console.log(starbucks[2].name);

    //inmortal solution
    for(let i=0;i<starbucks.length;i++){
        console.log(starbucks[i].name);
    }
}
displayClients();