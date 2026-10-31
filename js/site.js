// Builds the header links and the tiles from tiles.js (window.SITE).
(function () {
  var site = window.SITE || { links: [], tiles: [] };

  // Tabler icons (MIT), outline style.
  var ICONS = {
    github: '<path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"/>',
    linkedin: '<path d="M8 11v5"/><path d="M8 8v.01"/><path d="M12 16v-5"/><path d="M16 16v-3a2 2 0 1 0 -4 0"/><path d="M3 7a4 4 0 0 1 4 -4h10a4 4 0 0 1 4 4v10a4 4 0 0 1 -4 4h-10a4 4 0 0 1 -4 -4l0 -10"/>',
    web: '<path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"/><path d="M3.6 9h16.8"/><path d="M3.6 15h16.8"/><path d="M11.5 3a17 17 0 0 0 0 18"/><path d="M12.5 3a17 17 0 0 1 0 18"/>',
    mail: '<path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z"/><path d="M3 7l9 6l9 -6"/>',
    book: '<path d="M3 19a9 9 0 0 1 9 0a9 9 0 0 1 9 0"/><path d="M3 6a9 9 0 0 1 9 0a9 9 0 0 1 9 0"/><path d="M3 6l0 13"/><path d="M12 6l0 13"/><path d="M21 6l0 13"/>',
    mastodon: '<path d="M18.648 15.254c-1.816 1.763 -6.648 1.626 -6.648 1.626a18.262 18.262 0 0 1 -3.288 -.256c1.127 1.985 4.12 2.81 8.982 2.475c-1.945 2.013 -13.598 5.257 -13.668 -7.636l-.026 -1.154c0 -3.036 .023 -4.115 1.352 -5.633c1.671 -1.91 6.648 -1.666 6.648 -1.666s4.977 -.243 6.648 1.667c1.329 1.518 1.352 2.597 1.352 5.633s-.456 4.074 -1.352 4.944"/><path d="M12 11.204v-2.926c0 -1.258 -.895 -2.278 -2 -2.278s-2 1.02 -2 2.278v4.722m4 -4.722c0 -1.258 .895 -2.278 2 -2.278s2 1.02 2 2.278v4.722"/>'
  };

  function svg(name) {
    return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' +
      (ICONS[name] || ICONS.web) + '</svg>';
  }

  function esc(s) {
    return String(s).replace(/[&<>"]/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c];
    });
  }

  // Header links
  var links = document.getElementById("links");
  links.innerHTML = site.links.map(function (l) {
    return '<li><a rel="me" href="' + esc(l.url) + '" aria-label="' + esc(l.label) +
      '" title="' + esc(l.label) + '">' + svg(l.icon) + '</a></li>';
  }).join("");

  // Tiles. Text fields may contain simple HTML (links, <em>, <cite>).
  var cards = document.getElementById("cards");
  cards.innerHTML = site.tiles.filter(function (t) { return !t.hidden; }).map(function (t) {
    var linked = !!t.url; // any tile with a url is clickable all over
    var h = '<li class="cards__item"><article class="card' + (linked ? " card--linked" : "") + '">';
    if (t.image) {
      h += '<img class="card__image" src="' + esc(t.image) + '" alt="' + esc(t.imageAlt || "") + '"' +
        (t.imagePosition ? ' style="object-position:' + esc(t.imagePosition) + '"' : '') + ' loading="lazy">';
    }
    h += '<div class="card__content">';
    if (t.kicker) h += '<p class="card__kicker">' + esc(t.kicker) + '</p>';
    if (t.title) {
      h += '<h2 class="card__title">' +
        (t.url ? '<a href="' + esc(t.url) + '">' + t.title + '</a>' : t.title) + '</h2>';
    } else if (t.url) {
      // Untitled tile: an invisible link that covers the whole card.
      h += '<a class="card__cover" href="' + esc(t.url) + '" aria-label="' + esc(t.linkLabel || "Open link") + '"></a>';
    }
    h += '<div class="card__text">';
    if (t.verse) h += '<pre class="verse">' + esc(t.verse) + '</pre>';
    if (t.quote) {
      h += '<blockquote><p>' + t.quote.text + '</p>' +
        (t.quote.cite ? '<p>' + t.quote.cite + '</p>' : '') + '</blockquote>';
    }
    (t.text || []).forEach(function (p) { h += '<p>' + p + '</p>'; });
    if (t.list) {
      h += '<ul>' + t.list.map(function (i) {
        var label = i.url ? '<a href="' + esc(i.url) + '">' + i.label + '</a>' : i.label;
        return '<li>' + label + (i.note ? ' <span class="note">' + i.note + '</span>' : '') + '</li>';
      }).join("") + '</ul>';
    }
    h += '</div>';
    if (t.added) {
      var d = new Date(t.added + "T12:00:00");
      var label = isNaN(d) ? t.added : d.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
      h += '<p class="card__date"><time datetime="' + esc(t.added) + '">' + esc(label) + '</time></p>';
    }
    h += '</div></article></li>';
    return h;
  }).join("");
})();
