
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---src-pages-404-js": preferDefault(require("/Users/shanshanjiang/Projects/Bootcamp/gatsby_mysite/src/pages/404.js")),
  "component---src-pages-blog-js": preferDefault(require("/Users/shanshanjiang/Projects/Bootcamp/gatsby_mysite/src/pages/blog.js")),
  "component---src-pages-contact-js": preferDefault(require("/Users/shanshanjiang/Projects/Bootcamp/gatsby_mysite/src/pages/contact.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/shanshanjiang/Projects/Bootcamp/gatsby_mysite/src/pages/index.js")),
  "component---src-pages-me-js": preferDefault(require("/Users/shanshanjiang/Projects/Bootcamp/gatsby_mysite/src/pages/me.js")),
  "component---src-pages-news-js": preferDefault(require("/Users/shanshanjiang/Projects/Bootcamp/gatsby_mysite/src/pages/news.js")),
  "component---src-pages-projects-js": preferDefault(require("/Users/shanshanjiang/Projects/Bootcamp/gatsby_mysite/src/pages/projects.js")),
  "component---src-pages-using-typescript-tsx": preferDefault(require("/Users/shanshanjiang/Projects/Bootcamp/gatsby_mysite/src/pages/using-typescript.tsx"))
}

