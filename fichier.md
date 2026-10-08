<!doctype html>
<meta name="viewport" content="width=device-width, initial-scale=1">
<script src="https://cdn.jsdelivr.net/npm/marked/marked.min.js"></script>
<body style="max-width:800px;margin:auto;padding:1rem;font-family:sans-serif">
<div id="c">Chargement…</div>
<script>
const u = new URLSearchParams(location.search).get("url");
fetch(u).then(r => r.text()).then(t => c.innerHTML = marked.parse(t))
  .catch(e => c.textContent = "Erreur : " + e);
</script>
