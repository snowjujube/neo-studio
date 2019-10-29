(function(window, document) {
  function reset() {
    document.documentElement.style.fontSize = `${(document.documentElement.clientWidth / 375) * 100}px`;
  }

  reset();

  window.addEventListener('resize', reset);
  window.addEventListener('pageshow', reset);
  window.addEventListener('load', reset);
})(window, document);
