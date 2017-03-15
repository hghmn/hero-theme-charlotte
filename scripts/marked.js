/* global hexo */
'use strict';

// import hyperscript through the renderer module
const h = require('hexo-renderer-hyperscript/lib/h');

var marked = require('marked');
var markedRenderer = new marked.Renderer();

var assign = require('object-assign');
var hljs = require('highlight.js');

// Force the output to be a little more BEM-ish
hljs.configure({
    classPrefix: 'hljs__'
});

marked.setOptions({
    highlight: function (code, lang) {
        return hljs.highlight(lang, code).value; // hljs.highlightAuto(code, [ lang ]).value;
    }
});
// nicer code formatting
markedRenderer.code = function(code, lang) {
    var parsed = lang ? hljs.highlight(lang, code) : hljs.highlightAuto(code);
    return h('pre', { },
        h('code', {
            className: `hljs hljs--${parsed.language}`,
            innerHTML: parsed.value
        })).outerHTML;
};

function renderer(data, options) {
    return marked(data.text, { renderer: markedRenderer }); // , assign({}, this.config.marked, options));
}

hexo.config.marked = assign({
  gfm: true,
  pedantic: false,
  sanitize: false,
  tables: true,
  breaks: true,
  smartLists: true,
  smartypants: true
}, hexo.config.marked);

hexo.extend.renderer.register('md', 'html', renderer, true);
hexo.extend.renderer.register('markdown', 'html', renderer, true);
hexo.extend.renderer.register('mkd', 'html', renderer, true);
hexo.extend.renderer.register('mkdn', 'html', renderer, true);
hexo.extend.renderer.register('mdwn', 'html', renderer, true);
hexo.extend.renderer.register('mdtxt', 'html', renderer, true);
hexo.extend.renderer.register('mdtext', 'html', renderer, true);
