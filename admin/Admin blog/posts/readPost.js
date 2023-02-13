var ReadPost = document.getElementById("Read-Post");
var documentPost ='';

const getArticles = () =>{
    fetch('https://wild-red-penguin-tie.cyclic.app/api/Articles')
    .then((response) =>response.json())
    .then((data) =>{
      console.log('integration data', data.Data);
        data.Data.forEach((doc) => {

            documentPost += `<tr>
            <td>${doc.Title}</td>
            <td>Christa</td>
            <td>${doc.Topic}</td>
            <td><a href="#" id="${doc._id}" onclick="UpdatePost('${doc._id}')" class="edit UpdatePost">edit</a></td>
            <td><a href="#" id="${doc._id}" onclick="dltPost('${doc._id}')" class="delete deletePost">delete</a></td>
            
            </tr>`
        })
        
console.log("Done",documentPost);
ReadPost.innerHTML = documentPost;
console.log("okay....")
        })
    };
    getArticles ();
    
    
    
    //Delete
    
    const dltPost = (postId) =>{
        if (!postId) {
            console.error("Error: Invalid postId provided");
            return;
        }
      
        if (!confirm("Are you sure you want to delete this article?")) {
            return;
        }
        let token = localStorage.getItem("token") 
        fetch(`https://wild-red-penguin-tie.cyclic.app/api/Article/` + postId, {
            method: "DELETE",
            headers:{
                'auth-token':token
            }
    
        })
        .then(response => {
            if (!response.ok) {
                alert("Network response was not ok");
            }else{
                alert("Comment successfully deleted!");
            }
            location.reload();
        })
        .catch(error => {
            console.error("Error deleting comment: ", error);
        });   
    }



//edit 

const updatePost = async (postId) => {
    const inputTitle = document.getElementById("EditTitle").value;
    const bodyDescript = document.getElementsByClassName("ck-editor__editable")[0];
    const inputTopic = document.getElementById("EditTopic").value;
    const updateObject = {
        Title: inputTitle,
        articleContents: bodyDescript.innerHTML,
        Topic: inputTopic,
    };
    
    try {
        const response = await fetch(`https://wild-red-penguin-tie.cyclic.app/api/Article/` + postId, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem("token")
            },
            body: JSON.stringify(updateObject)
        });
        if (!response.ok) {
            alert("Network response was not ok");
            return;
        }
        alert("Article successfully updated!");
        location.reload();
    } catch (error) {
        console.error("Error updating article: ", error);
    }
};





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