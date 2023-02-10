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

    fetch('https://wild-red-penguin-tie.cyclic.app/api/Comment?blogId='+articleAddress,{
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
    console.log('comentss!!');
    var articleAddress = location.href.split('?id=')[1];
    fetch('https://wild-red-penguin-tie.cyclic.app/api/Comment/' +articleAddress,{
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    })
      .then(response => response.json())
      .then(comments => {
        console.log('comments', comments);
        const commentContainer = document.getElementById('getComments');
        let commentsHolder = '';
        comments.forEach(comment => {
          
           commentsHolder +=  `
            <div class="comment">
              <p class="name" id="name1">${comment.name}</p>
              <p class="text" id="text1">${comment.comment}</p>
            </div>
          `;
        });
        commentContainer.innerHTML= commentsHolder;
      })
      .catch(error => {
        console.error('Error fetching comments:', error);
      });
  };
  
  GetComments();
  