// Slow, soft bands of colored light drifting in the dark frame around the page.
// Runs only while <html> has data-light (Space toggles it; see keys.js).
// Plain 2D canvas, redrawn about ten times a second.
(function () {
  var root = document.documentElement;
  var canvas = document.querySelector(".frame-light");
  if (!canvas) return;
  var ctx = canvas.getContext("2d");
  var COLORS = ["#5cecff", "#ab60ed", "#fbb725", "#ff00f8", "#c080d0"];
  var SCALE = 0.5; // the light is soft, so a half-size canvas looks the same
  var timer = null;
  var t0 = performance.now();

  var beams = COLORS.map(function (c, i) {
    return {
      color: c,
      angle: -0.9 + i * 0.45,
      speed: 0.00004 + i * 0.000012,
      phase: i * 1.7,
      width: 0.18 + (i % 3) * 0.06
    };
  });

  function resize() {
    canvas.width = Math.max(1, Math.floor(innerWidth * SCALE));
    canvas.height = Math.max(1, Math.floor(innerHeight * SCALE));
  }

  function frameColor() {
    return getComputedStyle(root).getPropertyValue("--frame").trim() || "#1c1c1c";
  }

  function draw() {
    var w = canvas.width, h = canvas.height;
    var t = performance.now() - t0;
    var ease = Math.min(1, t / 8000); // fade in over 8 seconds
    ctx.globalCompositeOperation = "source-over";
    ctx.fillStyle = frameColor();
    ctx.fillRect(0, 0, w, h);
    ctx.globalCompositeOperation = "lighter";

    // Every beam starts from a point below the bottom edge that wanders.
    var sx = w * (0.55 + 0.3 * Math.sin(t * 0.00005));
    var sy = h * 1.25;
    var reach = Math.hypot(w, h) * 1.4;

    beams.forEach(function (b) {
      var a = -Math.PI / 2 + b.angle + 0.35 * Math.sin(t * b.speed + b.phase);
      var spread = b.width * (0.85 + 0.15 * Math.sin(t * 0.0003 + b.phase));
      var pulse = 0.5 + 0.5 * Math.sin(t * 0.0004 + b.phase * 2);
      var g = ctx.createRadialGradient(sx, sy, 0, sx, sy, reach);
      g.addColorStop(0, hexA(b.color, 0.55 * ease));
      g.addColorStop(0.5, hexA(b.color, (0.12 + 0.18 * pulse) * ease));
      g.addColorStop(1, hexA(b.color, 0));
      ctx.fillStyle = g;
      ctx.beginPath();
      ctx.moveTo(sx, sy);
      ctx.lineTo(sx + Math.cos(a - spread) * reach, sy + Math.sin(a - spread) * reach);
      ctx.lineTo(sx + Math.cos(a + spread) * reach, sy + Math.sin(a + spread) * reach);
      ctx.closePath();
      ctx.fill();
    });
  }

  function hexA(hex, a) {
    var n = parseInt(hex.slice(1), 16);
    return "rgba(" + (n >> 16 & 255) + "," + (n >> 8 & 255) + "," + (n & 255) + "," + a.toFixed(3) + ")";
  }

  function sync() {
    var on = root.hasAttribute("data-light");
    canvas.style.display = on ? "block" : "none";
    if (on && !timer) {
      t0 = performance.now();
      resize();
      draw();
      timer = setInterval(draw, 100);
    } else if (!on && timer) {
      clearInterval(timer);
      timer = null;
    }
  }

  addEventListener("resize", function () { if (timer) { resize(); draw(); } });
  new MutationObserver(sync).observe(root, { attributes: true, attributeFilter: ["data-light", "data-theme"] });
  sync();
})();
