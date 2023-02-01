var cool =document.getElementById("cool");
cool.addEventListener("submit", (event)=>{
    event.preventDefault();

    var inputName = document.getElementById("UserName").value;
    var inputMail = document.getElementById("Email").value;
    var inputPassword= document.getElementById("Pin").value;
    var inputPasswordConfirm= document.getElementById("PinConf").value;
   

    console.log("Done", inputName,inputMail,inputPassword,inputPasswordConfirm);

    var User= {
     UserName:inputName,
    Email:inputMail,
    Pin:inputPassword,
    PinConf:inputPasswordConfirm
    }

    db.collection("User-Form").add(User).then(()=>{
        console.log("Data has been saved")
        cool.reset();
    })
    .catch(()=>{
        console.log("Data are not Saved,Try Again!!")
    })

    // user auth

    Auth.createUserWithEmailAndPassword(User.Email, User.Pin)
    .then((userCredential) => {
        // Signed in 
        var user = userCredential.user;
        alert("user created successfully");
    })
    .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log("error", errorCode, errorMessage);
    });

});


        


