function validate() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if (username == "admin" && password == "admin") {
      alert("Login successful!");
        window.location = "success.html";
    } else {
      alert("Permission denied!");
    }
  }