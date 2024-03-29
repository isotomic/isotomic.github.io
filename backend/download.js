function makeHttpObject() {
  try {
    return new XMLHttpRequest();
  } catch (error) {}
  try {
    return new ActiveXObject("Msxml2.XMLHTTP");
  } catch (error) {}
  try {
    return new ActiveXObject("Microsoft.XMLHTTP");
  } catch (error) {}

  throw new Error("Could not create HTTP request object.");
}

function saveStaticDataToFile() {
  var request = makeHttpObject();
  request.open("GET",backendurl, true);
  request.send(null);
  request.onreadystatechange = function () {
    if (request.readyState == 4)
      var blob = new Blob([request.responseText], {
        type: "text/plain;charset=utf-8",
      });
    var newincog = document.createElement("a");
    newincog.href = URL.createObjectURL(blob);
    newincog.download = "isotomic.html";
    newincog.click();
    URL.revokeObjectURL(newincog.href);
  };
}

saveStaticDataToFile();
