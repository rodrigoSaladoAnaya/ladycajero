const password = document.getElementById("password");
password.addEventListener("keyup", function(e) {
  TweenLite.set("img", {x: function() {
    return password.value.length * 14.8;
  }, opacity: function() {
    console.log(password.value.length / 10)
    return password.value.length / 10;
  }});
});
