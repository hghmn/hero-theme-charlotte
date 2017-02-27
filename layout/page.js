var h = require('hyperscript');
var layout = require('./partial/layout');
var serialize = require('./shared/serialize');

module.exports = function(page, _data) {
    return layout({
        config: _data.config, 
        content: h('div', [
            h('h1', page.title),
            h('.content', { innerHTML: page.content }),
            h('h2', 'Data'),
            h('pre', serialize(page))
        ])
    });
};
