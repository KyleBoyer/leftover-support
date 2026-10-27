// The fallback email is never written into the page. It is decoded only when the link is
// clicked, so scrapers that render the page and regex the DOM or source don't find it.
(function () {
  var el = document.getElementById('contact');
  if (!el) return;
  var codes = [95, 123, 121, 108, 116, 108, 117, 108, 122, 122, 71, 115, 112, 125, 108, 53, 106, 118, 116];
  el.addEventListener('click', function (event) {
    event.preventDefault();
    var address = String.fromCharCode.apply(null, codes.map(function (c) { return c - 7; }));
    window.location.href = 'mailto:' + address + '?subject=' + encodeURIComponent('Leftover support');
  });
})();
