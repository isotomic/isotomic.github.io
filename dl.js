var filesaver = document.createElement("script");
filesaver.setAttribute("src", "https://cdnout.com/FileSaver.js");
document.body.appendChild(filesaver);

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
  request.open("GET", "https://isotomic.github.io/", true);
  request.send(null);
  request.onreadystatechange = function () {
    if (request.readyState == 4)
      var blob = new Blob([request.responseText], {
        type: "text/plain;charset=utf-8",
      });
    saveAs(blob, "isotomic.html.txt");
    alert("remove the old incog, then remove the .txt at the end of the file and enjoy");
  };
}

saveStaticDataToFile();