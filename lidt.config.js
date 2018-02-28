var app = './app',
    dist = './dist',
    content = './content',
    node = './node_modules',
    paths = {
        dist: dist,
        content: content,
        templatesDist: dist + '/templates',
        cssDist: dist + '/css',
    },
    files = {
        cssImport: [
            node + '/bootstrap/dist/css/bootstrap.min.css',
            node + '/angular-ui-bootstrap/dist/ui-bootstrap-csp.css'
        ],
        jsImport: [
            node + '/angular/angular.js',
            node + '/angular-ui-router/release/angular-ui-router.js',
            node + '/angular-animate/angular-animate.js',
            node + '/angular-ui-bootstrap/dist/ui-bootstrap-tpls.js',
            node + '/angular-resource/angular-resource.js',
            node + '/chart.js/dist/Chart.bundle.min.js',
            node + '/angular-chart.js/dist/angular-chart.min.js',
            //node + '/bootstrap-daterangepicker/daterangepicker.js',
        ],
        templates: app + '/**/*.tpl.html',
        js: app + '/**/*.js',
        jsModules: app + '/**/*.mod.js',
        sass: app + '/**/*.scss',
    };

var config = {
    paths: paths,
    files: files
};

module.exports = config;