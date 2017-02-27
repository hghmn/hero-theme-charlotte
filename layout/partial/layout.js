var h = require('hyperscript');
var head = require('./head');

module.exports = function(content, config) {
    return h('html',
        head(config),
        h('body',
            h('.container', { id: 'wrapper' }, [
                h('.three.columns.sidebar', [
                    h('nav',
                        h('h3', { id: 'logo' }, 'Nathan Hughes'),
                        h('ul', [
                            h('li', h('a', { href: '/' }, 'Home')),
                            h('li', h('a', { href: '/about' }, 'About'))
                        ]))
                ]),
                h('.eight.columns.offset-by-one.content', content)
            ])));
};
