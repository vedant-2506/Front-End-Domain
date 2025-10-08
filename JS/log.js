document.getElementById("regForm").addEventListener("submit", function(event)
 {
  event.preventDefault();  

  let username = document.getElementById("username").value.trim();
  let email = document.getElementById("email").value.trim();
  let password = document.getElementById("password").value.trim();

  let message = "";

  if(username === "" || email === "" || password === "") {
    message = "All fields are required!";
  } else if(password.length < 6) {
    message = "Password must be at least 6 characters.";
  } else {
    message = "Registration successful! ";
  }

  document.getElementById("message").innerText = message;
});
