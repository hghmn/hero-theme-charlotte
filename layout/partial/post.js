var h = require('hyperscript');

function makePost(item, config, layout) {
    var content = h('article.post', [
        h('header.post__title',
            h('h1', h('a', { href: config.root + item.path }, item.title))),
        // truncate the summary length
        h('section.post__content', { innerHTML: (item.summary || item.excerpt || item.content) }, [
            item.excerpt
                ? h('a', { href: config.root + item.path }, 'read more...')
                : '',
        ]),
        h('footer.post__meta', [
            h('span.categories',
                item.categories
                    .map(item =>
                        h('a.category', {
                            href: config.root + item.path,
                            title: `Category: ${item.name}`,
                        }, item.name))),
                    // item.name)),
            h('span.divider', '|'),
            h('time', { datetime: item.date.toString() }, item.date.format('YYYY-MM-DD')),
            h('span.divider', '|'),
            h('span.tags',
                item.tags
                    .sort('posts')
                    .map(item =>
                        h('a.tag', {
                            href: config.root + item.path,
                            title: `Tagged with ${item.name}`
                        }, `#${item.name}`))),
        ])
    ]);

    // handle multiple uses
    if (layout && layout == "layout") {
        return h('section',
            h('div.container', content));
    } else {
        return content;
    }
}

module.exports = makePost;
