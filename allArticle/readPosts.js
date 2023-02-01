var AllPosts =document.getElementById("ReadBlogs"); 
var Articles="";
db.collection("Post-Form").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());

      Articles += `<div class="col-12 col-sm-6 col-md-4 col-lg-4 p-0 blog-box rounded flex">
       <img alt="image" class="img-fluid rounded " src="${doc.data().Image}">
       <div class="px -3">
            <h4><strong>${doc.data().Title}</strong></h4>
       <span>may 31,2020</span>
       <p>${doc.data().Topic}</p>

     <a href="${location.origin + '/Read.html?id='+ doc.id}">Read More</a>
       </div> 
     </div>`
     

    })

    console.log("Done",Articles);
    AllPosts.innerHTML = Articles;
  
});