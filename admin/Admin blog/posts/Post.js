
var postForm = document.getElementById("post-Form");
postForm.addEventListener("submit", (event) => {
event.preventDefault();

var inputText = document.getElementById("Title").value;
var bodyDescript = document.getElementsByClassName("ck-editor__editable")[0];
var inputTopic = document.getElementById("Topic").value;
var picture = document.getElementById("image").value;

 const CreateArticle = () =>{
    let token = localStorage.getItem("token")
fetch('https://wild-red-penguin-tie.cyclic.app/api/Article', {
  method: 'POST', 
  headers: {
    'auth-token':token,
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({

    Title: inputText,
    articleContents: bodyDescript.innerHTML || "",
    Topic: inputTopic,
    image: picture
  })
   
  })
  .then((response) => response.json())
  .then((data) => {
    console.log('Data has been saved', data);
  })
  .catch((error) => {
    console.error('Error happened', error);
  })
 }
CreateArticle ();
})



