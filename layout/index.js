var h = require('hyperscript');
var layout = require('./partial/layout');
var serialize = require('./shared/serialize');

module.exports = function(page, _data) {
    var config = _data.config;
    return layout({
        config: _data.config, 
        content: h('div', [
            h('h2', 'Posts'),
            h('.posts', 
                page.posts.map(p => makePost(p, config))),
            h('h2', 'Data'),
            h('pre', serialize(_data))
        ])
    });
};

function excerpt(string, length) {
    return string
        .replace(/(<([^>]+)>)/ig, " ")
        .substr(0, length | 160) + ' ...'; // h('div', { innerHTML: html }).textContent; // .substr(length || 160);
}

function makePost(item, config) {
    return h('article.post', [
        h('.post-title',
            h('h3', h('a', { href: config.root + item.path }, item.title))),
        // truncate the summary length
        h('.post-content', null, excerpt(item.summary || item.content)),
        h('.post-footer', [
            h('span.date', [
                h('strong', 'DATE: '),
                item.date.format('YYYY-MM-DD')
            ]),
            // h('span.categories', (item.categories || []).sort().join(', ')),
            h('span.tags', [
                h('strong', 'TAGS: '),
                item.tags
                    .sort('posts')
                    .map(item =>
                        h('a.tag', { href: config.root + item.path, title: item.name }, item.name))
            ]),
        ])
    ]);
}
