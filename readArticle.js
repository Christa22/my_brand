var Article =document.getElementById("ReadBlogs"); 
var documentPost="";
db.collection("Post-Form").get().then((querySnapshot) => {
   var index= 0;
    querySnapshot.forEach((doc) => {

       console.log("Call",index);

      if(index<=2){
     
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, " => ", doc.data());

     documentPost += `<div class="col-12 col-sm-8 col-md-4 col-lg-3 p-0 blog-box rounded">
     <img alt="image" class="img-fluid rounded" src="${doc.data().Image}">
     <div class="px -3">
          <h4><strong>${doc.data().Title}</strong></h4>
     <span>may 31,2020</span>
     <p>${doc.data().Topic}</p>

   <a href="${location.origin + '/Read.html?id='+ doc.id}"> Read more</a>
     </div> 
   </div>`; 
   
   index++

      }
     

    })

    console.log("Done",documentPost);
    Article.innerHTML = documentPost;
  
});