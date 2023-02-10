var articleAddress = location.href.split('?id=')[1];
var Comment = document.getElementById('Comment_form');
Comment.addEventListener("submit" ,(event) =>{
    event.preventDefault();

    PostComment ();
})
console.log("Reaching or not?")

 const PostComment = () => {
    var Name = document.getElementById("name").value;
    var Message= document.getElementById("comment").value;

    fetch('http://127.0.0.1:5500/api/Comment?blogId='+articleAddress,{
        method : 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify ({
      
          name: Name,
          comment:Message,
          

        })
    })
    .then((response) => response.json())
    .then((data) =>{
        alert("Comment has been saved")
    })
    .catch((error) =>{
        alert('Error happened!!',error);
    })

 }

//read 
const GetComments = () => {
    var articleAddress = location.href.split('?id=')[1];
    fetch('{http://127.0.0.1:5500/api/Comment?blogId=' +articleAddress,{
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    })
      .then(response => response.json())
      .then(comments => {
        comments.forEach(comment => {
          const commentContainer = document.createElement('div');
          
          commentContainer.innerHTML +=  `
            <p>Name: ${comment.name}</p>
            <p>Comment: ${comment.comment}</p>
          `;

          document.getElementById('Comment_section').appendChild(commentContainer);
        });
      })
      .catch(error => {
        console.error('Error fetching comments:', error);
      });
  };
  
  GetComments();
  