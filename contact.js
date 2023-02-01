 var row =document.getElementById("row");
 row.addEventListener("submit", (event)=>{
    event.preventDefault();

    var inputGmail = document.getElementById("Email").value;
    var inputTopic = document.getElementById("Subject").value;
    var inputText = document.getElementById("Message").value;
   

    console.log("Done", inputGmail,inputTopic,inputText);

    var Address = {
        Email:inputGmail,
        Subject:inputTopic,
        Message:inputText,
      
        }

        db.collection("Contact").add(Address).then(()=>{
            console.log("Data has been saved")
            row.reset();
        })
            
            .catch(()=>{
                console.log("Data are not Saved,Try Again!!")
            })

        });
        


