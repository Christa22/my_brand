var postForm =document.getElementById("post-Form");
postForm.addEventListener("submit", (event)=>{
    event.preventDefault();

    var inputText = document.getElementById("Title").value;
    var bodyDescript = document.getElementsByClassName("ck-editor__editable")[0];
    var inputTopic= document.getElementById("Topic").value;
    var picture = document.getElementById("picture");

    
    // 'file' comes from the Blob or File API] child('bella.png')
    const store = storage.ref().child(picture.files[0].name).put(picture.files[0]);
    store.then((snapshot) => snapshot.ref.getDownloadURL())
    .then(url =>{
        console.log("url", url);
        
        
            var Post = {
              Title:inputText,
                Body:bodyDescript.innerHTML || "",
                Topic:inputTopic,
                Image: url
                }
                console.log("done",Post);
                db.collection("Post-Form").add(Post).then(()=>{
                    console.log("Data has been saved")
                   postForm.reset();
                })
                    
                    .catch(()=>{
                        console.log("Data are not Saved,Try Again!!")
                    })
        
                });

    });


