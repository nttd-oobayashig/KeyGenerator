function keyGenarate(len) {
  var ch = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var cl = ch.length;
  var r = "";
  for (var i = 0; i < len; i++) {
    r += ch[Math.floor(Math.random() * cl)];
  }
  return r;
}
