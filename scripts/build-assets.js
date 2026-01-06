const fs = require("fs");
function concat(outFile, files) {
  const content = files.map(f => fs.readFileSync(f, "utf8")).join("\n\n");
  fs.mkdirSync(require("path").dirname(outFile), { recursive: true });
  fs.writeFileSync(outFile, content, "utf8");
}
concat("assets/dist/site.bundle.css", [
  "assets/css/wl-core.css",
  "assets/css/site-theme.css",
  "assets/css/site.css",
  "assets/css/enhancements.css"
]);
concat("assets/dist/site.bundle.js", [
  "assets/js/site.js",
  "assets/js/enhancements.js",
  "assets/liturgy/liturgy-accent.js"
]);
