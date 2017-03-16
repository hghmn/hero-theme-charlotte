var h = require('hyperscript');

module.exports = function meta(item, config) {
    return h('.meta', [
        h('span.meta__categories',
                item.categories
                    .map(item =>
                        h('a.meta__link', {
                            href: config.root + item.path,
                            title: `Category: ${item.name}`,
                        }, item.name))),
                    // item.name)),
            h('span.meta__divider', '|'),
            h('time.meta__timestamp', { datetime: item.date.toString() }, item.date.format('YYYY-MM-DD')),
            h('span.meta__divider', '|'),
            h('span.meta__tags',
                item.tags
                    .sort('posts')
                    .map(item =>
                        h('a.meta__link', {
                            href: config.root + item.path,
                            title: `Tagged with ${item.name}`
                        }, `#${item.name}`)))
    ]);
}
