// Press d to toggle dark mode (ignored with a modifier held or while typing in
// a field). The choice is remembered in this browser.
// Loaded in <head> so a dark page doesn't flash light first.
(function () {
  var root = document.documentElement;

  function get(k) { try { return localStorage.getItem(k); } catch (e) { return null; } }
  function set(k, v) { try { localStorage.setItem(k, v); } catch (e) {} }

  function theme(t) {
    if (t === "dark") root.setAttribute("data-theme", "dark");
    else root.removeAttribute("data-theme");
  }

  theme(get("theme"));

  document.addEventListener("keydown", function (ev) {
    if (ev.metaKey || ev.ctrlKey || ev.altKey || ev.repeat) return;
    var t = ev.target;
    if (t && (t.isContentEditable || /^(INPUT|TEXTAREA|SELECT|BUTTON)$/.test(t.tagName))) return;
    if (ev.key === "d") {
      var next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
      theme(next); set("theme", next);
    }
  });
})();
