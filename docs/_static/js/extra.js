window.addEventListener(
  "load",
  function () {
    var p = localStorage.getItem("data-md-color-scheme");
    if (p) {
      document.body.setAttribute("data-md-color-scheme", p);
    }
    var p = localStorage.getItem("data-md-color-primary");
    if (p) {
      document.body.setAttribute("data-md-color-primary", p);
    }
    var a = localStorage.getItem("data-md-color-accent");
    if (a) {
      document.body.setAttribute("data-md-color-accent", a);
    }
  },
  false
);

hljs.initHighlighting();

document.getElementsByTagName("html")[0].lang = "zh-Hans"; // change language to `zh-Hans` for Han.js.
