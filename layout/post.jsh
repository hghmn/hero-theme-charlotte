var h = require('hyperscript');
var layout = require('./partial/layout');
var meta = require('./partial/meta');

module.exports = function(post, _data) {
    var config = _data.config;
    
    return layout({
        config: _data.config,
        content: h('div.container',
            h('article.post', [
                h('header.header--page', [
                    h('h1', post.title)
                ]),
                h('section', { innerHTML: post.content }),
                h('hr'),
                h('.post__footer',
                    meta(post, config)),
            ])),
        type: 'post',
        data: _data,
    });
};
