var Article =document.getElementById("ReadBlogs"); 
var documentPost="";

const getArticles = () =>{
  fetch('https://wild-red-penguin-tie.cyclic.app/api/Articles')
  .then((response) => response.json())
  .then((data) => {
    console.log('integration date',data.Data);

    var index= 0;
    
    data.Data.forEach((doc) => {

       console.log("Call",index);

      if(index<=2){
     

     documentPost += `<div class="col-12 col-sm-8 col-md-4 col-lg-3 p-0 blog-box rounded">
     <img alt="image" class="img-fluid rounded" src="${doc.image}">
     <div class="px -3">
          <h4><strong>${doc.Title}</strong></h4>
     <span>may 31,2020</span>
     <p>${doc.Topic}</p>

   <a href="${location.origin + '/Read.html?id='+ doc._id}"> Read more</a>
     </div> 
   </div>`; 
   
   index++
    }
  })

    
    console.log("Done",documentPost);
    Article.innerHTML = documentPost;

})

};


getArticles();
