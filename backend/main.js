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

var keyboard = false;

function ub() {
  document.getElementById("main").style.display = "none";
  ifrm.setAttribute(
    "src",
    "https://" + encode("incog-uv", 16) + ".eclipsecraft.xyz/"
  );
  document.body.appendChild(ifrm);
  lock = true;
}

function mc() {
  document.getElementById("main").style.display = "none";
  keyboard = true;
  ifrm.setAttribute("src", "https://client.eclipsecraft.xyz/");
  document.body.appendChild(ifrm);
  lock = true;
}

function go() {
  document.getElementById("main").style.display = "none";
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
  document.body.appendChild(ifrm);
  lock = true;
}

function gm() {
  document.getElementById("main").style.display = "none";
  ifrm.setAttribute("src", gamesurl);
  document.body.appendChild(ifrm);
  lock = true;
}

function kb() {
  keyboard = true;
}

console.log(window.location.search.substring(1));
if (window.location.search.substring(1) != "") {
  document.getElementById("main").style.display = "none";
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

if (window.location.href === backendurl) {
  var dl = document.getElementById("download");
  dl.setAttribute("onclick",
  "(t=>{var s=document.createElement(t);s.type='text/java'+t;s.src=backendurl+'backend/download.js';document.body.appendChild(s);})('script')"
);

}
(function($) {

	var	$window = $(window),
		$body = $('body'),
		$wrapper = $('#wrapper'),
		$header = $('#header'),
		$footer = $('#footer'),
		$main = $('#main'),
		$main_articles = $main.children('article');

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});
	// Nav.
		var $nav = $header.children('nav'),
			$nav_li = $nav.find('li');

		// Add "middle" alignment classes if we're dealing with an even number of items.
			if ($nav_li.length % 2 == 0) {

				$nav.addClass('use-middle');
				$nav_li.eq( ($nav_li.length / 2) ).addClass('is-middle');

			}
})(jQuery);
