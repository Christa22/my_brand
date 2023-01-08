
        //Read Data from Firebase
        var ReadUser = document.getElementById("Read-User");
        var documentUser ='';

db.collection("User-Form").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());

       documentUser += `<tr>
               
       <td>${doc.data().UserName}</td>
       <td>${doc.data().Email}</td>
       <td>${doc.data().Pin}</td>
       <td>${doc.data().PinConf}</td>
       <td>Admin</td>
       <td><a href="#" class="edit">edit</a></td>
       <td><a href="#" id="${doc.id}" class="delete deleteUser">delete</a></td>
       </tr>`
    });

    console.log("Done",documentUser);
    ReadUser.innerHTML = documentUser;


    //Delete
    var DeleteUser = document.getElementsByClassName("deleteUser");
    for (let i of DeleteUser) {
        i.addEventListener("click", (event) => {
            if (event.target.classList.contains("deleteUser")) {
                var docId = i.getAttribute("id");
                console.log("Perfrom Action",docId);
                
                // firebase delete
                db.collection("User-Form").doc(docId).delete().then(() => {
                    console.log("Document successfully deleted!");
                }).catch((error) => {
                    console.error("Error removing document: ", error);
                });

            }
        })
    }
});



