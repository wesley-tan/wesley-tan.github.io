
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/Users/wesleysimeontan/wesley-tan.github.io/.cache/dev-404-page.js")),
  "component---src-pages-404-js": preferDefault(require("/Users/wesleysimeontan/wesley-tan.github.io/src/pages/404.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/wesleysimeontan/wesley-tan.github.io/src/pages/index.js")),
  "component---src-pages-projects-js": preferDefault(require("/Users/wesleysimeontan/wesley-tan.github.io/src/pages/projects.js")),
  "component---src-pages-tutoring-js": preferDefault(require("/Users/wesleysimeontan/wesley-tan.github.io/src/pages/tutoring.js"))
}

