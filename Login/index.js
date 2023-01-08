const loginForm = document.getElementById('login-form');
loginForm.addEventListener('submit', (event) => {
  // Prevent the form from submitting
  event.preventDefault();
  
  // Get the username and password values
  const UserName = loginForm.elements.email.value;
  const Passwordd = loginForm.elements.password.value;

  //Firebase

Auth.signInWithEmailAndPassword(UserName, Passwordd)
  .then((userCredential) => {
    // Signed in
    var user = userCredential.user;
   alert('Successfuly Login');
  location.replace('../admin/Admin blog/posts/index.html');

  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    alert('Please Provide Right Information');
  });
 

        
        });
  


  
