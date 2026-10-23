document.getElementById('year').textContent = new Date().getFullYear();

// Show the latest published version, fetched live from the public GitHub
// Releases API so the site tracks releases without edits.
(function () {
  var label = document.getElementById('latest-version');
  var badge = document.getElementById('hero-version');
  var repo = label && label.getAttribute('data-repo');
  if (!repo) return;

  fetch('https://api.github.com/repos/' + repo + '/releases/latest', {
    headers: { Accept: 'application/vnd.github+json' },
  })
    .then(function (r) { return r.ok ? r.json() : null; })
    .then(function (data) {
      if (!data || !data.tag_name) return;
      var version = 'v' + String(data.tag_name).replace(/^v/i, '');
      label.textContent = 'Download · ' + version;
      if (badge) badge.textContent = version;
    })
    .catch(function () {});
})();
