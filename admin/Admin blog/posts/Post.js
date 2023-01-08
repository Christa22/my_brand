var postForm =document.getElementById("post-Form");
postForm.addEventListener("submit", (event)=>{
    event.preventDefault();

    var inputText = document.getElementById("Title").value;
    var inputBody = document.getElementById("Body").value;
    var inputTopic= document.getElementById("Topic").value;
   

    console.log("Done", inputText,inputBody,inputTopic);

    var Post = {
      Title:inputText,
        Body:inputBody,
        Topic:inputTopic,
       
        }

        db.collection("Post-Form").add(Post).then(()=>{
            console.log("Data has been saved")
           postForm.reset();
        })
            
            .catch(()=>{
                console.log("Data are not Saved,Try Again!!")
            })

        });

   

