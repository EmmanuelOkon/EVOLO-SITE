

var myVar;

function myFunction() {
  myVar = setTimeout(showPage, 10);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("myDiv").style.display = "block";
}

function rsubmitMSG(valid, msg) {
  if (valid) {
      var msgClasses = "h3 text-center tada animated";
  } else {
      var msgClasses = "h3 text-center";
  }
  $("#rmsgSubmit").removeClass().addClass(msgClasses).text(msg);
}
