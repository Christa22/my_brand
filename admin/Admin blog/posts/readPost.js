        var ReadPost = document.getElementById("Read-Post");
        var documentPost ='';
      
        const getArticles = () =>{
            fetch('http://127.0.0.1:5500/api/Articles')
            .then((response) =>response.json())
            .then((data) =>{
              console.log('integration data', data.Data);
                data.Data.forEach((doc) => {

                    documentPost += `<tr>
                    <td>${doc.Title}</td>
                    <td>Christa</td>
                    <td>${doc.Topic}</td>
                    <td><a href="#" id="${doc._id}" class="edit UpdatePost">edit</a></td>
                    <td><a href="#" id="${doc._id}" class="delete deletePost">delete</a></td>
                    
                    </tr>`
                })
                
    console.log("Done",documentPost);
    ReadPost.innerHTML = documentPost;
   
                })
            };
            getArticles ();

    

    
   
        
   


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
       

//
var bodyDescript = document.getElementsByClassName("ck-editor__editable")[0];

console.log("Description",bodyDescript.innerHTML);


