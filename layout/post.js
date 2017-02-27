var h = require('hyperscript');
var layout = require('./partial/layout');
var serialize = require('./shared/serialize');

module.exports = function(post, _data) {
    var config = _data.config;
    return layout({
        config: _data.config, 
        content: h('div', [
            h('h1', post.title),
            h('span', JSON.stringify(post.categories)),
            h('div.tags', null, makeTags(post.tags)),
            h('p', { innerHTML: post.content }),
            h('h2', 'Data'),
            h('pre', serialize(post))
        ])
    });
};

function makeTags(tags) {
    return post.tags
        .sort('posts') // Sort by post count
        .map(item =>   // Map to an array of tag links
            h('a.tag', { href: config.root + item.path, title: item.name }, item.name));
}
