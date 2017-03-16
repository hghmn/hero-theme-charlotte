var h = require('hyperscript');
var layout = require('./partial/layout');
var serialize = require('./shared/serialize');
var makePost = require('./partial/post');

module.exports = function(page, _data) {
    var title = page.tag ? `Tagged: ${page.tag}`
        : page.category ? `Category: ${page.category}`
            : 'Archives';
    
    return layout({
        config: _data.config, 
        content: h('div.container', [
            h('header.header--faded', 
                h('h1', title)),
            h('hr'),
            h('section',
                page.posts.map(p => makePost(p, _data.config))),
            h('.content', { innerHTML: page.content }),
        ]),
        type: 'archive',
        data: _data,
    });
};
