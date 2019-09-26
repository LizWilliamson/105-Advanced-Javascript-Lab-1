const salon={
    name:"Grr and Prr Pet Salon",
    phone:"555-555-5555",
    address:{
        street:"Meow Lane",
        number:"1313-5"
        
    },

    workingHours:{
        days:"Mon-Fri",
        open:"8:00 a.m.",
        close:"5:00 p.m."
    },

    pets:[],
    
}

const petCount=function(){
    alert("You have registered " + salon.pets.length + " pets at the Grr and Purr Pet Salon");
}

let{name,phone,address:{street,number},workingHours:{days,open,close}}=salon;

document.getElementById('salon').innerHTML=`<h1> Welcome to the ${name} </h1><br><p>Contact us ${phone}, ${number} ${street} <br> Hours of operation: ${open} to ${close}</p>`;

class Pet {
    constructor(ownerName, contactPhone, petName, age, gender, breed, service) {
        this.hunger=10;
        this.happiness=5;
        this.ownerName = ownerName;
        this.contactPhone = contactPhone;
        this.petName = petName;
        this.age = age;
        this.gender = gender;
        this.breed = breed;
        this.service = service;

        

    }

    status=function(){
        console.log("Happiness: " + this.happiness + "  " + "Hunger: " + this.hunger);
        
    }


    contact=function(){
        console.log("Owners Name: " + this.ownerName + "\n" + "Contact Phone: " + this.contactPhone);

    }

    feed=function(){
        this.hunger-=10;
        this.happiness+=12;
        console.log("Feeling ... ");
    }

    
}

const pet1=new Pet("Oliver", "123-456-7890", "Shaggy", "5 yrs", "Male", "Dog", "Haircut");
const pet2=new Pet("Liz", "234-567-8901", "Meowgi", "1 yr", "Female", "Cat", "Pedicure");
const pet3=new Pet("Melodie", "345-678-9012", "Purrrkins", "3 months", "Male", "Cat", "Grooming");

salon.pets.push(pet1);
salon.pets.push(pet2);
salon.pets.push(pet3);

// for(let i=0;i<salon.pets.length; i++){
document.getElementById('pet-info').innerHTML=`Pets currently staying at the Grr and Purr Pet Salon: ${salon.pets.length} <br>Pets: ${salon.pets[0].petName}, ${salon.pets[1].petName}, ${salon.pets[2].petName}`;
petCount();
    // console.log(salon.pets[i].petName);
// }

// console.table(salon.pets);


// document.getElementById('pet-info').innerHTML=`<p>Pets currently staying at Grr and Purr Pet Salon: ${pet1.petName}, ${pet2.petName}, ${pet3.petName}`

// console.log(salon.pets[1],name);

// pet1.status();
// pet1.feed();
// pet1.status();
// pet1.contact();





//console.log(pets.length);


// console.table(salon.pets);



