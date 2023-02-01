
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
       
       <td><a href="#" id="${doc.id}" class="edit UpdateUser">edit</a></td>
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
                    alert("Document successfully deleted!");
                    location.reload();
                }).catch((error) => {
                    console.error("Error removing document: ", error);
                });

            }
        })
    }

     
        //Edit user

    var EditUser = document.getElementsByClassName("UpdateUser");
    for (let i of EditUser) {
        i.addEventListener("click", (event) => {
            if (event.target.classList.contains("UpdateUser")) {
                var docId = i.getAttribute("id");
                console.log("Perfrom Action",docId);
                
                // firebase edit
                var docRef = db.collection("User-Form").doc(docId);

                docRef.get().then((doc) => {
                    if (doc.exists) {

                        var formUser = document.getElementById("UpdateUser");

                         document.getElementById("EditUserName").value  = doc.data().UserName;
                         document.getElementById("EditEmail").value= doc.data().Email;
                         document.getElementById("EidtPin").value= doc.data().Pin;
                         document.getElementById("EditPinConf").value= doc.data().PinConf;
                         document.getElementById("EditRole").value= doc.data().Role;
                         
                          
                         formUser.addEventListener("submit",(event)=>{
                            event.preventDefault();

                        var inputName = document.getElementById("EditUserName").value;
                        var inputMail = document.getElementById("EditEmail").value;
                        var inputPin =   document.getElementById("EidtPin").value;
                        var inputPinConf = document.getElementById("EditPinConf").value;
                        var inputRole =  document.getElementById("EditRole").value;
                       

                            var NewObject =  {
                                UserName:inputName,
                                Email:inputMail,
                                Pin:inputPin,
                                PinConf:inputPinConf,
                                Role:inputRole
                            
                              }

                        var NewUpdate = db.collection("User-Form").doc(docId);

                            // Set the "capital" field of the city 'DC'
                            return NewUpdate.update(NewObject)
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



