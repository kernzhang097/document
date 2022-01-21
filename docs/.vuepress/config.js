module.exports = {
    title: "前端开发文档",
    base: '/document/',
    head: [
        // add jquert and fancybox
        ['script', { src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.slim.min.js' }],
        ['script', { src: 'https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.5.2/jquery.fancybox.min.js' }],
        ['link', { rel: 'stylesheet', type: 'text/css', href: 'https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.5.2/jquery.fancybox.min.css' }]
    ], 
    markdown: {
        lineNumbers: true,
    },
    themeConfig: {
        nav: require("./nav.js"),
        sidebar: require("./sidebar.js"),
        sidebarDepth: 2,
        collapsable: true,
    },
    configureWebpack: {
        resolve: {
          alias: {
            '@img': '../../../.vuepress/public/images'
          }
        }
    },
    plugins: ['@vuepress/medium-zoom']
};
