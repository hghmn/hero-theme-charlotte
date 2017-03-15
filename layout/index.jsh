// Layout Template for Home Page and default
var h = require('hyperscript');
var layout = require('./partial/layout');
var serialize = require('./shared/serialize');

module.exports = function(page, _data) {
    var config = _data.config;
    return layout({
        config: _data.config,
        content: h('div', [
            h('header',
                h('h1', 'Posts')),
            h('.posts',
                page.posts.map(p => makePost(p, config))),
            h('h2', 'Index Data'),
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
        h('header.post__title',
            h('h3', h('a', { href: config.root + item.path }, item.title))),
        // truncate the summary length
        h('section.post__content', null, excerpt(item.summary || item.excerpt || item.content)),
        h('footer.post__meta', [
            h('span.categories',
                item.categories
                    .map(item =>
                        h('a.category', {
                            href: config.root + item.path,
                            title: item.name
                        }, item.name))),
                    // item.name)),
            h('span.divider', '|'),
            h('span.date', item.date.format('YYYY-MM-DD')),
            h('span.divider', '|'),
            h('span.tags',
                item.tags
                    .sort('posts')
                    .map(item =>
                        h('a.tag', {
                            href: config.root + item.path,
                            title: item.name
                        }, `#${item.name}`))),
        ])
    ]);
}


// <article class="post-teaser">
//     <div class="article-teaser__text">
//         <h2 class="article-teaser__title">
//             <a class="article-teaser__link" href="https://ia.net/topics/speaking/">Speaking Schedule</a>
//         </h2>
//         <aside class="article-teaser__meta">
//             <time class="article-teaser__date" datetime="2016-11-01T12:11:58">01. November 2016</time>
//         </aside>
//         <p class="article-teaser__excerpt">
//             <a class="article-teaser__excerpt-link" href="https://ia.net/topics/speaking/">
//                 iA is speaking at a wide range of design and tech conferences. An overview of past and future events.
//             </a>
//         </p>
//     </div>
// </article>