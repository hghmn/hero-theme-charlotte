var h = require('hyperscript');
var head = require('./head');
var serialize = require('../shared/serialize');

function windowGlobals(data) {
    return data.config.debug
        ? h('script', { innerHTML: `var __json_global__ = ${serialize(data)};`})
        : null;
}

module.exports = function(data /* { content, config }*/) {
    // TODO: use theme config to map out menu
    var menu = data.data.theme.menu || {};

    return h('html', [
        head(data.config),
        h('body', [
            h('section.grid', [
                h('.grid__columns.grid__columns--three', [
                    h('section.sidebar',
                        h('nav.sidebar__nav',
                            h('header',
                                h('h2', { id: 'logo' }, 
                                    h('a', { href: '/' }, 'Nathan Hughes')),
                                h('ul', Object.keys(menu).map(k =>
                                    h('li', h('a', { href: menu[k].href }, menu[k].name)))
                                ))))
                                /*[
                                    h('li', h('a', { href: '/' }, 'Home')),
                                    h('li', h('a', { href: '/about' }, 'About')),
                                    // h('li', h('a', { href: '/contact' }, 'Contact')),
                                    h('li', h('a', { href: '/todo' }, '[todo]'))
                                ]))))*/
                ]),
                h('.grid__columns.grid__columns--nine',
                    h('section', {
                        className: [
                            'content',
                            data.type !== 'index' ? 'content--page' : ''
                        ].join(' ')
                    }, data.content))
            ]),
            windowGlobals(data),
        ])
    ]);
};
