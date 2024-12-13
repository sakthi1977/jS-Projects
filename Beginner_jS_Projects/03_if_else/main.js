document.getElementById("submitBtn").addEventListener("click", function() { 
    let userData = document.getElementById("userInput").value;

    if (userData === "rainy" || userData === "raining") {
        document.getElementById("resultMsg").innerHTML="Take an Umbrella";
    }
    else if (userData === "sunny") {
        document.getElementById("resultMsg").innerHTML="Take a Sun Glass";
    }
    else if (userData === "nothing") {
        document.getElementById("resultMsg").innerHTML="Enjoy the climate without an Umbrella and Sun Glass";
    }
    else{
        document.getElementById("resultMsg").innerHTML="Type: rainy or sunny or nothing";
    }
});

document.getElementById("clickBtn").addEventListener("click", function() {
  
    let firstname = document.getElementById("firstName").value;
    let lastname = document.getElementById("lastName").value;

    if (firstname === "" && lastname === "") {
        document.getElementById("fullName").innerHTML = "Please enter your first name & last name";
    }

    else if (firstname === "") { 
        document.getElementById("fullName").innerHTML = "Please enter your first name";
    }

    else if (lastname === "") { 
        document.getElementById("fullName").innerHTML = "Please enter your last name";
    }

    else {
        document.getElementById("fullName").innerHTML = `${firstname} ${lastname}`;
    } 
});

document.getElementById('popUpBtn').addEventListener('click', ()=>{

    let popUpResult = document.getElementById('popUpBox');

    setTimeout(()=>{
        popUpResult.innerHTML = 'My sincere thanks to <a href="https://www.youtube.com/@LearnzDevelopmentHub">Learnz Development Hub </a>';
    }, 1000);

    setTimeout(()=>{
        popUpResult.innerHTML = 'My sincere thanks to <a href="https://novitechrd.com/">NoviTech</a>';
    }, 4000);

    setTimeout(()=>{
        popUpResult.innerHTML = 'My sincere thanks to <a href="https://www.youtube.com/@DaveGrayTeachesCode">Dave Gray</a>';
    }, 6000);

    setTimeout(()=>{
        popUpResult.innerHTML = 'My sincere thanks to <a href="https://www.youtube.com/@Balachandra_in">Balachandra</a>';
    }, 8000);
    
    setTimeout(()=>{
        popUpResult.innerHTML = 'My sincere thanks to <a href="https://www.youtube.com/@ErrorMakesClever">Error Makes Clever</a>';
    }, 10000);
    setTimeout(()=>{
        popUpResult.innerHTML = 'My sincere thanks to <a href="https://www.google.co.in/">Google</a> <a href="https://www.youtube.com/">YouTube</a> <a href="https://openai.com/index/chatgpt/">ChatGPT</a> ';
    }, 12000);
    
    setTimeout(()=>{
        popUpResult.innerHTML = '' ;
    }, 14000);
});

