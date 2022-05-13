"use strict"

let personInfo = $("#personInfo");

$("#submit").on("click", (e) => {
    e.preventDefault();
    
    let name = $("#name").val().trim();
    let age = $("#age").val().trim();
    let phone = $("#phone").val().trim();

    if(name==='' || age =='' || phone ===''){
        alert("Bütün xanalar doldurulmalıdır");
        return;
    }

    let data = {
        name,
        age,
        phone,
    }

    db.ref("/people").push().set(data);
})

db.ref("/people").on("value", function(snap){
    let obj = snap.val();
    let objKeys = Object.keys(obj);
    let lastPerson = obj[objKeys[objKeys.length - 1]];
    personInfo.html(`Name: ${lastPerson.name} <br> Age: ${lastPerson.age} <br> Phone: ${lastPerson.phone}`);
})
