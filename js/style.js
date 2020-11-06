// (function ($) {
//   "use strict";

//   $(window).on('load', function () {
//     var preloaderFadeOutTime = 500;
//     function hidePreloader() {
//       var preloader = $('.spinner-wrapper');
//       setTimeout(function () {
//         preloader.fadeOut(preloaderFadeOutTime);
//       }, 500);
//     }
//     hidePreloader();
//   });
// }
// )

var myVar;

function myFunction() {
  myVar = setTimeout(showPage, 1500);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("myDiv").style.display = "block";
}
