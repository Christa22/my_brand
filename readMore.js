var Address = location.href.split('?id=')[1];
var More = document.getElementById("ReadMore");
console.log("More", Address);
var ReadArticle = "";
var docRef = db.collection("Post-Form").doc(Address);

docRef.get().then((doc) => {
    if (doc.exists) {
      
        ReadArticle +=` <div class="col-12 col-sm-6 col-md-6 col-lg-5 p-0 blog-box rounded">
              <img alt="image" class="img-fluid rounded" src="${doc.data().Image}">
              <div class="px -3">
                   <h4><strong>${doc.data().Title}</strong></h4>
                   <h6>${doc.data().Topic}</h6>
              <span>may 31,2020</span>
              <p>${doc.data().Body}</p>

              <a href="${location.origin + '/index.html'}"> Back Home</a>
               
              </div> 
            </div>`;
         
         More.innerHTML = ReadArticle;
            



        console.log("Document data:", doc.data());
    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }
}).catch((error) => {
    console.log("Error getting document:", error);
});