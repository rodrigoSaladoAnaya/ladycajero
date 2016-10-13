const psw = document.getElementById("psw");
psw.addEventListener("keyup", function(e) {
  TweenLite.set("img", {x: function() {
    return psw.value.length * 14.8;
  }, opacity: function() {
    return psw.value.length / 10;
  }});
});
