$(document).ready(function() {
  // console.log("hello");
  var height = parseInt(prompt("Please enter your height in inches: "));

  if (height <= 48) {
    $("#bunny").show();
    $("#race").show();
  } else if (height < 60) {
    $("#race").show();
  } else {
    if (height <= 72) {
      $("#death").show();
      $("#whirl").show();
      $("#race").show();
    } else {
      $("#whale").show();
      $("#race").show();
    };
  };
});
