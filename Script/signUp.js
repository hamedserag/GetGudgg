function validation() {
  var form = document.getElementById("form")
  var form = document.getElementById("email")
  var form = document.getElementById("text")
  var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (email.match(pattern)) {
    alert("Signup complete!");
  } else {
    alert("Invaild Entery!")
  }
}
