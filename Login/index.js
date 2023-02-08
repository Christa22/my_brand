const loginForm = document.getElementById('login-form');
loginForm.addEventListener('submit', (event) => {
  // Prevent the form from submitting
  event.preventDefault();
  
  // Get the username and password values
  const Email = loginForm.elements.email.value;
  const Password = loginForm.elements.password.value;

 const Login = () => {
fetch('http://127.0.0.1:5500/api/Login',{
method: 'POST',
headers: {
  "Content-Type": "application/json"
},
body: JSON.stringify({
  Email: Email,
  Password: Password,
})
})
.then(response => response.json())
.then(data => {
if (data.error) {
  alert(data.error);
} else {
  console.log("Login Successfully!!",data.token);
  localStorage.setItem('token', data.token);
  alert('Login Successful!!');
  location.replace('../admin/Admin blog/posts/index.html');

}
})
.catch((err) => {
console.log(err);
})
 }
 Login ();
});

