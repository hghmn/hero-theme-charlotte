var h = require('hyperscript');
var layout = require('./partial/layout');
var serialize = require('./shared/serialize');

module.exports = function(page, _data) {
    return layout({
        config: _data.config,
        content: h('article.container', [
            h('header.header--page', [
                h('h1', page.title)
            ]),
            h('section', { innerHTML: page.content }),
        ]),
        type: 'page',
        data: _data,
    });
};
