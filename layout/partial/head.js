var h = require('hyperscript');

module.exports = function(data) {
    return h('head', [
            h('title', `${data.title} | ${data.description}`),
            h('meta', { name: 'author', content: data.author }),
            h('meta', { charset: 'utf-8' }),
            h('meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0, minimum-scale=1.0' }),
            h('link', {
                rel: 'stylesheet',
                type: 'text/css',
                href: '/css/main.css'
            })
        ]);
};
