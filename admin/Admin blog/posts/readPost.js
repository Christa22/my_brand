
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
       <td><a href="#" class="edit">edit</a></td>
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
                    console.log("Document successfully deleted!");
                }).catch((error) => {
                    console.error("Error removing document: ", error);
                });

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
       





