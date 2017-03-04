var h = require('hyperscript');
var head = require('./head');

module.exports = function(data /* { content, config }*/) {
    return h('html',
        head(data.config),
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
                h('.eight.columns.offset-by-one.content', data.content)
            ])));
};
