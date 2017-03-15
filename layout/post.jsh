var h = require('hyperscript');
var layout = require('./partial/layout');
var serialize = require('./shared/serialize');

module.exports = function(post, _data) {
    var config = _data.config;
    return layout({
        config: _data.config,
        content: h('article.post', [
            h('header', [
                h('h1', post.title),
                h('.subheading', null, post.date.format('YYYY-MM-DD')),
            ]),
            h('hr'), // maybe border bottom on header?
            h('p', { innerHTML: post.content }),
            h('.post-footer',
                h('div.tags', null,
                    post.tags.sort('posts') // Sort by post count
                    .map(item =>   // Map to an array of tag links
                        h('a.tag', {
                            href: config.root + item.path, title: item.name
                        }, item.name)))),
            h('h2', 'Data'),
            h('pre', serialize(post))
        ])
    });
};
