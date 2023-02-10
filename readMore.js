var Address = location.href.split('?id=')[1];
var More = document.getElementById("ReadMore");
console.log("More", Address);
var ReadArticle = "";

const getSingleArticle = () =>{
    fetch('https://wild-red-penguin-tie.cyclic.app/api/Article/'+ Address)
    .then((response) => response.json())
    .then((data) => {
      console.log('integration date',data.data[0]);

        const doc = data.data[0];
      if (doc) {
      
        ReadArticle +=` <div class="col-12 col-sm-6 col-md-6 col-lg-5 p-0 blog-box rounded">
              <img alt="image" class="img-fluid rounded" src="${doc.image}">
              <div class="px -3">
                   <h4><strong>${doc.Title}</strong></h4>
                   <h6>${doc.Topic}</h6>
              <span>may 31,2020</span>
              <p>${doc.articleContents}</p>

              <a href="${location.origin + '/index.html'}"> Back Home</a>
               
              </div> 
            </div>`;
         
         More.innerHTML = ReadArticle;
            
    }
})

}

getSingleArticle();



