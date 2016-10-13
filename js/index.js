const psw = document.getElementById("psw");
psw.focus();
psw.addEventListener("keyup", function(e) {
  const pvl = psw.value.length;
  TweenLite.set("img", {x: function() {
    return pvl * 14.8;
  }, opacity: function() {
    return pvl / 10;
  }});
});
