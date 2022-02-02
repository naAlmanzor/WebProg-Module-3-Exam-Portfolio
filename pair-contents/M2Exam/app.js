var images = [
    "assets/kubo.png",
    "assets/nunu.png",
    "assets/gobta.png",
    "assets/beni-enma.png",
    "assets/koyanskaya.png",
    "assets/hina.png",
    "assets/momoji.png",
    "assets/cidala.png",
    "assets/vikala.png",
    "assets/junnie.png",
];

var names = [
    "Kubo",
    "Nunu",
    "Gobta",
    "Beni Enma",
    "Koyanskaya",
    "Hina",
    "Momoji",
    "Cidala",
    "Vikala",
    "Junnie",
];

var age = [
     '2', '5', '10', '8', '6', '11', '3', '4', '8', '1'
];

var breed = [
    "Siberian Husky",
    "Persian",
    "Eurasian Otter",
    "Parrot",
    "Silver Fox",
    "Hamster",
    "Goldfish",
    "Toyger",
    "Deer Mouse",
    "Shiba Inu",
];

function set(){
    document.getElementById("petImage").src=images[0];    
    document.getElementById("petName").innerHTML=names[0]+", " +age[0];
    document.getElementById("petType").innerHTML=breed[0];
}

function nextPet(){
    
    images.shift();
    document.getElementById("petImage").src=images[0];    

    names.shift();
    age.shift();

    document.getElementById("petName").innerHTML=names[0]+", "+age[0];

    breed.shift();
    document.getElementById("petType").innerHTML=breed[0];
    
    if (images.length==0){
        // Placeholder
        document.getElementById("petImage").src="assets/default-image.png";
        document.getElementById("profile").style.visibility="hidden";
        
        // Disables button
        document.getElementById("dislike").disabled=true;
        document.getElementById("heart").disabled=true;
        document.getElementById("dislike").style.filter = "brightness(50%)";
        document.getElementById("heart").style.filter = "brightness(50%)";
    }
    console.log(images)
}

function heartPet(){
    //div-messages
    var divMsgs = document.createElement("div");
    divMsgs.className = "messages";

    //div-avatar
    var divAvt = document.createElement("div");
    divAvt.className = "avatar";
    divMsgs.appendChild(divAvt);

    //pets
    var divName = document.createElement("div");
    divName.innerHTML = names[0];

    //pet age
    var divAge = document.createElement("div");
    divAge.innerHTML = " " + age[0];

    
    //image 
    var iconurl = images[0]; 
    var img = document.createElement("img");
    img.src=iconurl;
    divAvt.appendChild(img);
    
    document.getElementById("likedPets").appendChild(divMsgs).appendChild(divName).appendChild(divAge);
    
    nextPet();
}

function dislikePet(){
    nextPet();
}