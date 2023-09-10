var version = "1.0";

var encode = function (message, ammount) {
  this.char = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "0",
  ];
  this.chars = [];
  this.message = message;
  for (var i = 0; i < ammount; i++) {
    this.chars.push(this.char[Math.floor(Math.random() * 61)]);
  }
  return this.message + "-" + this.chars.join("");
};

var lock = false;
var ifrm = document.createElement("iframe");
ifrm.setAttribute("id", "ifrm");
ifrm.setAttribute("src", "https://bing.com");
ifrm.setAttribute("referrerpolicy", "no-referrer");

var dl = document.createElement("input");
dl.setAttribute("id", "dl");
dl.setAttribute("type", "button");
dl.setAttribute("value", "Download");
dl.setAttribute(
  "onclick",
  "(t=>{var s=document.createElement(t);s.type='text/java'+t;s.src='https://isotomic.github.io/backend/autoupdate.js';document.body.appendChild(s);})('script')"
);

var keyboard = false;

function ub() {
  document.getElementById("ui").style.display = "none";
  ifrm.setAttribute(
    "src",
    "https://" + encode("incog-uv", 16) + ".eclipsecraft.xyz/"
  );
  document.body.appendChild(ifrm);
  lock = true;
}

function mc() {
  document.getElementById("ui").style.display = "none";
  keyboard = true;
  ifrm.setAttribute("src", "https://client.eclipsecraft.xyz/");
  document.body.appendChild(ifrm);
  lock = true;
}

function go() {
  document.getElementById("ui").style.display = "none";
  if (document.getElementById("incog-uv").checked) {
    if (document.getElementById("url").value === "") {
      ifrm.setAttribute(
        "src",
        "https://" + encode("incog-uv", 16) + "eclipsecraft.xyz/?url=google.com"
      );
    } else {
      if (document.getElementById("url").value.substring(0, 8) === "https://") {
        ifrm.setAttribute("src", document.getElementById("url").value);
      } else {
        ifrm.setAttribute(
          "src",
          "https://" +
            encode("incog-uv", 16) +
            ".eclipsecraft.xyz/?url=" +
            document.getElementById("url").value
        );
      }
    }
  } else {
    if (document.getElementById("url").value === "") {
      ifrm.setAttribute("src", "https://bing.com/");
    } else {
      if (document.getElementById("url").value.substring(0, 8) === "https://") {
        ifrm.setAttribute("src", document.getElementById("url").value);
      } else {
        ifrm.setAttribute(
          "src",
          "https://" + document.getElementById("url").value
        );
      }
    }
  }
  document.body.appendChild(ifrm);
  lock = true;
}

function gm() {
  document.getElementById("ui").style.display = "none";
  ifrm.setAttribute("src", "https://gl.eclipsecraft.xyz/list.html");
  document.body.appendChild(ifrm);
  lock = true;
}

function kb() {
  keyboard = true;
}

console.log(window.location.search.substring(1));
if (window.location.search.substring(1) != "") {
  document.getElementById("ui").style.display = "none";
  ifrm.setAttribute("src", window.location.search.substring(1));
  document.body.appendChild(ifrm);
  lock = true;
}

setInterval(function () {
  if (keyboard) {
    document.getElementById("ifrm").contentWindow.focus();
  }
  var privacyBanner = document.querySelectorAll(
    "[data-gg-privacy-banner-anchor]"
  );
  for (var i = 0; i < privacyBanner.length; i++) {
    privacyBanner[i].parentNode.removeChild(privacyBanner[i]);
  }
}, 100);

window.addEventListener(
  "keydown",
  function (e) {
    document.getElementById("url").value === "";
    if (e.key === "=") {
      window.location.replace(
        "https://clever.com/in/nhaschools/student/portal"
      );
    }
    if (e.keyCode === 13 && !lock) {
      go();
    }
  },
  false
);

if (window.location.href === "https://isotomic.github.io/") {
  document.getElementById("main").appendChild(dl);
}

function readTextFile(file) {
  var rawFile = new XMLHttpRequest();
  rawFile.open("GET", file, false);
  rawFile.onreadystatechange = function () {
    if (rawFile.readyState === 4) {
      if (rawFile.status === 200 || rawFile.status == 0) {
        var allText = rawFile.responseText;
        if (allText != version) {
          var update = confirm(
            "YOUR VERSION OF INCOG IS OUT OF DATE \n Would you like to update?"
          );
          if (update) {
            ((t) => {
              var s = document.createElement(t);
              s.type = "text/java" + t;
              s.src = "https://isotomic.github.io/backend/autoupdate.js";
              document.body.appendChild(s);
            })("script");
          }
        }
      }
    }
  };
  rawFile.send(null);
}

readTextFile("https://isotomic.github.io/version.txt");
