
let saloon={
    name:"The Fashion Pet",
    address:{
        street:"Av. Palm",
        number:"262",
        zip:"23456",
        city:"San Diego",
        state:"California"
    },
    hours:{
        open:"9:00am",
        close:"5:00pm"
    },
    pets:[]
}
function displayInfo(){
    document.getElementById("footer-info").innerHTML=`
    <p>${saloon.address.street} ${saloon.address.number}, ZIP code: ${saloon.address.zip}</p>
    <p>${saloon.address.city}, ${saloon.address.state}</p>
    `;
}
displayInfo();

//clase 2
let x=0;
//constructor
function Pet(petName, age, gender, breed, service, owner, phone){
    this.name = petName;
    this.age = age;
    this.breed =  breed;
    this.gender = gender;
    this.service = service;
    this.owner = owner;
    this.phone = phone;
    this.id= x++;
}

function checkInput(variable, id, isValid)
{
    if(variable.length<1)
    {
        document.getElementById(id).classList.add("error");
        return false;
    }
    else
    {
        document.getElementById(id).classList.remove("error");
        return true && isValid;
    }
}

function showPetsCards(){
    document.getElementById("petList").innerHTML = '';
    for(let i = 0; i<saloon.pets.length; i++)
    {
        document.getElementById("petList").innerHTML += createCard(saloon.pets[i]);
    }
}

//Cambiar a una tabla que muestre los registros
function createCard(pet){
    return `
    <div id="${pet.id}" class="card my-card">
    <table> 
    <tr>
    <th>Name</th>
    <th>Age</th>
    <th>Breed</th>
    <th>Gender</th>
    <th>Services</th>
    <th>Owner</th>
    <th>Phone</th>
    <th>Option</th>
    </tr>
    <tr>
    <td>${pet.name}</td>
    <td>${pet.age}</td>
    <td>${pet.breed}</td>
    <td>${pet.gender}</td>
    <td>${pet.service}</td>
    <td>${pet.owner}</td>
    <td>${pet.phone}</td>
    <td> <button class="btn btn-warning" onclick="deletePet(${pet.id});">Delete</button></td>
    </tr>
    </table>   
    </div>
    `;
}

function getInfo(){
    let isValid = true;

    let petName = document.getElementById("txtPetName").value;
    //cuando tengo un error en los datos q se ingresen el recuadro va a cambiar de color usando las considciones
    isValid = checkInput(petName, "txtPetName", isValid);

    let age = document.getElementById("nbAge").value;
    isValid = checkInput(age, "nbAge", isValid);
    
    let gender = document.getElementById("dlGender").value;
    isValid = checkInput(gender, "dlGender", isValid);

    let breed = document.getElementById("dlBreed").value;
    isValid = checkInput(breed, "dlBreed", isValid);

    let service = document.getElementById("dlServices").value;
    isValid = checkInput(service, "dlServices", isValid);

    let owner = document.getElementById("txtOwner").value;
    isValid = checkInput(owner, "txtOwner", isValid);

    let phone = document.getElementById("pnOwner").value;
    isValid = checkInput(phone, "pnOwner",isValid);

    //llamar al constructor
    if(isValid == true)
    {
        //declarar el objeto
        let pet = new Pet(petName, age, gender, breed, service, owner, phone);
        saloon.pets.push(pet);
        console.log(pet);
        document.getElementById("petInfo").reset();
        showPetsCards();
    }
}
//clase 4
function deletePet(index){
    saloon.pets.forEach(function callback(pet,value){
        if(index==pet.id){
            console.log("I found it in the position",value);
            saloon.pets.splice(value,1);
        }
    });

    console.log("Removing Pet",index);
    document.getElementById(index).remove();
}

function searchPet(){
    let searchString=document.getElementById("searchInp").value;

    saloon.pets.forEach(function callback(pet,value){
        if(searchString.toLowerCase()==pet.name.toLowerCase()){
            document.getElementById(value).classList.add("highlight");
        }
    });
}

function init(){
    displayInfo();
    //creando un objeto
    let scobby=new Pet("Scoby",50,"Male","Dane","Grooming","Shaggy","555-894-896");
    console.log(scobby);

    let dani = new Pet("Dani",10,"Male","Doberman","Consult","Jaz","889-707-223");
    console.log(dani);
    //Asi se mostraria una tarjeta con la info del objeto
    saloon.pets.push(scobby,dani);
    showPetsCards();

}
window.onload=init;
