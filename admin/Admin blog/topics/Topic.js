var col =document.getElementById("col");
col.addEventListener("submit", (event)=>{
    event.preventDefault();

    var inputName = document.getElementById("TopicName").value;
    var inputDescription = document.getElementById("DescriptMessage").value;
   
    console.log("Done", inputName,inputDescription);

    var Topic = {
      TopicName:inputName,
      DescriptMessage:inputDescription,
       
        }

        db.collection("Topic-Form").add(Topic).then(()=>{
            console.log("Data has been saved")
           col.reset();
        })
            
            .catch(()=>{
                console.log("Data are not Saved,Try Again!!")
            })

        });
        


