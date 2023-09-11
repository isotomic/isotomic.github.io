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
  request.open("GET", backendurl, true);
  request.send(null);
  request.onreadystatechange = function () {
    if (request.readyState == 4)
      var blob = new Blob([request.responseText], {
        type: "text/plain;charset=utf-8",
      });
    var newincog = document.createElement("a");
    newincog.href = URL.createObjectURL(blob);
    newincog.download = "isotmoic.html.txt";
    newincog.click();
    URL.revokeObjectURL(newincog.href);
    alert(
      "remove the old incog, then remove the .txt at the end of the file and enjoy"
    );
  };
}

function readTextFile(file) {
  var allText = null;
  var rawFile = new XMLHttpRequest();
  rawFile.open("GET", file, false);
  rawFile.onreadystatechange = function () {
    if (rawFile.readyState === 4) {
      if (rawFile.status === 200 || rawFile.status == 0) {
        allText = rawFile.responseText;
      }
    }
  };
  rawFile.send(null);
  return allText;
}

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
  request.open("GET", backendurl, true);
  request.send(null);
  request.onreadystatechange = function () {
    if (request.readyState == 4)
      var blob = new Blob([request.responseText], {
        type: "text/plain;charset=utf-8",
      });
    var newincog = document.createElement("a");
    newincog.href = URL.createObjectURL(blob);
    newincog.download = "isotmoic.html.txt";
    newincog.click();
    URL.revokeObjectURL(newincog.href);
    alert(
      "remove the old incog, then remove the .txt at the end of the file and enjoy"
    );
  };
}

function readTextFile(file) {
  var allText = null;
  var rawFile = new XMLHttpRequest();
  rawFile.open("GET", file, false);
  rawFile.onreadystatechange = function () {
    if (rawFile.readyState === 4) {
      if (rawFile.status === 200 || rawFile.status == 0) {
        allText = rawFile.responseText;
      }
    }
  };
  rawFile.send(null);
  return allText;
}

var latestVer = readTextFile(backendurl+"version.txt");

function cu() {
  if (latestVer - version != 0) {
    var update = confirm(
      "YOUR VERSION OF INCOG IS OUT OF DATE \n Would you like to update?"
    );
    if (update) {
      saveStaticDataToFile();
    }
  }else {
    alert("No new version availible, you are already on the latest version " + version);
  }
}

if (latestVer - version != 0) {
  var update = confirm(
    "YOUR VERSION OF INCOG IS OUT OF DATE \n Would you like to update?"
  );
  if (update) {
    saveStaticDataToFile();
  }
}
