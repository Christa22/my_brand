
        //Read Data from Firebase
        var ReadTopic = document.getElementById("Read-Topic");
        var documentTopic ='';

db.collection("Topic-Form").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());

       documentTopic += `<tr>
             
       <td>${doc.data().TopicName}</td>
       <td>${doc.data().DescriptMessage}</td>
       <td><a href="#" id="${doc.id}" class="edit UpdateTopic">edit</a></td>
       <td><a href="#" id="${doc.id}"class="delete  deleteTopic">delete</a></td>
       </tr>`

    });

    console.log("Done",documentTopic);
    ReadTopic.innerHTML = documentTopic;


     //Delete Topic
     var DeleteTopic = document.getElementsByClassName("deleteTopic");
     for (let i of DeleteTopic) {
         i.addEventListener("click", (event) => {
             if (event.target.classList.contains("deleteTopic")) {
                 var docId = i.getAttribute("id");
                 console.log("Perfrom Action",docId);
                 
                 // firebase delete
                 db.collection("Topic-Form").doc(docId).delete().then(() => {
                     console.log("Document successfully deleted!");
                 }).catch((error) => {
                     console.error("Error removing document: ", error);
                 });
 
             }
         })
     }

        //Edit Topic

    var EditTopic = document.getElementsByClassName("UpdateTopic");
    for (let i of EditTopic) {
        i.addEventListener("click", (event) => {
            if (event.target.classList.contains("UpdateTopic")) {
                var docId = i.getAttribute("id");
                console.log("Perfrom Action",docId);
                
                // firebase edit
                var docRef = db.collection("Topic-Form").doc(docId);

                docRef.get().then((doc) => {
                    if (doc.exists) {

                        var TopicForm = document.getElementById("TopicEdit");

                         document.getElementById("EditTopicName").value  = doc.data().TopicName;
                         document.getElementById("EditDescriptMessage").value = doc.data().DescriptMessage;
                         
                          
                         TopicForm.addEventListener("submit",(event)=>{
                            event.preventDefault();

                        var inputTopicN = document.getElementById("EditTopicName").value;
                        var inputMessage =  document.getElementById("EditDescriptMessage").value;
                       

                            var RenewObject =  {
                                TopicName: inputTopicN,
                                DescriptMessage: inputMessage,
                            
                              }

                        var NewUpdate = db.collection("Topic-Form").doc(docId);

                            // Set the "capital" field of the city 'DC'
                            return NewUpdate.update(RenewObject)
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
 




