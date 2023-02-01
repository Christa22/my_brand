
        //Read Data from Firebase
        var ReadPost = document.getElementById("Read-Post");
        var documentPost ='';

db.collection("Post-Form").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());

       documentPost += `<tr>
                
       <td>${doc.data().Title}</td>
       <td>Christa</td>
       <td>${doc.data().Topic}</td>
      

       <td><a href="#" id="${doc.id}" class="edit UpdatePost">edit</a></td>
       <td><a href="#" id="${doc.id}" class="delete deletePost">delete</a></td>
       
       </tr>` ; 

    })

    console.log("Done",documentPost);
    ReadPost.innerHTML = documentPost;

    
    //Delete
    var DeletePost = document.getElementsByClassName("deletePost");
    for (let i of DeletePost) {
        i.addEventListener("click", (event) => {
            if (event.target.classList.contains("deletePost")) {
                var docId = i.getAttribute("id");
                console.log("Perfrom Action",docId);
                
                // firebase delete
                db.collection("Post-Form").doc(docId).delete().then(() => {
                   alert("Document successfully deleted!");
                    location.reload();
                }).catch((error) => {
                    console.error("Error removing document: ", error);
                });

            }
        })
    }
    //Edit Post 

    var EditPost = document.getElementsByClassName("UpdatePost");
    for (let i of EditPost) {
        i.addEventListener("click", (event) => {
            if (event.target.classList.contains("UpdatePost")) {
                var docId = i.getAttribute("id");
                console.log("Perfrom Action",docId);
                
                // firebase edit
                var docRef = db.collection("Post-Form").doc(docId);

                docRef.get().then((doc) => {
                    if (doc.exists) {

                        var Form = document.getElementById("update");

                         document.getElementById("EditTitle").value  = doc.data().Title;
                         document.getElementById("EditBody").value= doc.data().Body;
                         document.getElementById("EditTopic").value =doc.data().Topic;

                         
                         
                          
                         Form.addEventListener("submit",(event)=>{
                            event.preventDefault();

                        var inputTitle = document.getElementById("EditTitle").value;
                        var bodyDescript = document.getElementsByClassName("ck-editor__editable")[0];
                        var inputTopic =  document.getElementById("EditTopic").value;
 
                            var updateObject =  {
                                Title: inputTitle,
                                Body: bodyDescript.innerHTML,
                                Topic: inputTopic
                              }

                        var NewUpdate = db.collection("Post-Form").doc(docId);

                            // Set the "capital" field of the city 'DC'
                            return NewUpdate.update(updateObject)
                            .then(() => {
                                alert("Document successfully updated!");
                                location.reload();
                            })
                            .catch((error) => {
                                // The document probably doesn't exist.
                                console.error("Error updating document: ", error);
                            });


                      
                         })
                    } 
                })
            }
        })
    }



});
 //sign out
var logoutBtn = document.getElementById("Logout");
logoutBtn.addEventListener("click",(event)=>{

   Auth.signOut().then(() => {
     alert('Sign-out successful!!');

     location.replace('../../../index.html');

      }).catch((error) => {
        // An error happened.
      });


});
       

//
var bodyDescript = document.getElementsByClassName("ck-editor__editable")[0];

console.log("Description",bodyDescript.innerHTML);


