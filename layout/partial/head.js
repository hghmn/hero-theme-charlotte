var h = require('hyperscript');

function meta(opts) {
    return h('meta', opts || {});
}

// TODO: get at the theme global
module.exports = function(data) {
    return h('head', [
            h('title', `${data.title} | ${data.description}`),
            meta({ charset: 'utf-8' }),
            meta({ name: 'X-UA-Compatible', content: 'IE=edge' }),
            meta({ name: 'author', content: data.author }),
            meta({ name: 'viewport', content: 'width=device-width, initial-scale=1.0, minimum-scale=1.0' }),
            h('link', {
                rel: 'stylesheet',
                type: 'text/css',
                href: '/css/main.css'
            })
        ]);
};
