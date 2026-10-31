// Keys (ignored with a modifier held or while typing in a field):
//   d      toggles dark mode
//   Space  toggles the moving light in the frame around the page
// Both choices are remembered in this browser. The light is never on when the
// system asks for reduced motion, or on a touch screen.
// Loaded in <head> so a dark page doesn't flash light first.
(function () {
  var root = document.documentElement;
  var still = window.matchMedia("(prefers-reduced-motion: reduce), (pointer: coarse)").matches;

  function get(k) { try { return localStorage.getItem(k); } catch (e) { return null; } }
  function set(k, v) { try { localStorage.setItem(k, v); } catch (e) {} }

  function light(on) {
    if (on && !still) root.setAttribute("data-light", "");
    else root.removeAttribute("data-light");
  }
  function theme(t) {
    if (t === "dark") root.setAttribute("data-theme", "dark");
    else root.removeAttribute("data-theme");
  }

  light(get("light") !== "off");
  theme(get("theme"));

  document.addEventListener("keydown", function (ev) {
    if (ev.metaKey || ev.ctrlKey || ev.altKey || ev.repeat) return;
    var t = ev.target;
    if (t && (t.isContentEditable || /^(INPUT|TEXTAREA|SELECT|BUTTON)$/.test(t.tagName))) return;
    if (ev.key === "d") {
      var next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
      theme(next); set("theme", next);
    } else if (ev.key === " " && !still) {
      ev.preventDefault();
      var on = !root.hasAttribute("data-light");
      light(on); set("light", on ? "on" : "off");
    }
  });
})();
