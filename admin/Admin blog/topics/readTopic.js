
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
       <td><a href="#" class="edit">edit</a></td>
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
 });
 




