'use strict';
module.exports = function(grunt) {

    require('load-grunt-tasks')(grunt);
    grunt.initConfig({
        page: {
            app: 'app',
            dist: 'dist'
        },
        clean: {
            dist: {
                files: [{
                    dot: true,
                    src: [
                        '.tmp',
                        'dist/*',
                        'dist/.git*'
                    ]
                }]
            }
        },
        compass: {
            dist: {
                options: {
                    sassDir: '<%= page.app %>/style',
                    cssDir: '<%= page.dist %>/style',
                    relativeAssets: false,
                    assetCacheBuster: false,
                    // outputStyle: 'compressed'
                }
            }
        },
        requirejs: {
            options: {
                baseUrl: '<%= page.app %>/script',
                // appdir: '<%= page.app %>/script',
                dir: '<%= page.dist %>/script',
                optimize: 'uglify2',
                preserveLicenseComments: false,
                uglify2: {
                    ascii_only: true
                }
                
            },
            dist: {
                options: {
                    paths: {'text': 'lib/text' },
                    modules: [{
                        name: 'page/index'
                    }],
                    removeCombined: true
                }
            }
        },
        imagemin: {
            dist: {
                files: [{
                    expand: true,
                    cwd: '<%= page.app %>/image',
                    src: '{,*/}*.{gif,jpeg,jpg,png,cur}',
                    dest: '<%= page.dist %>/image'
                }]
            }
        },
        copy: {
            dist: {
                files: [{
                    expand: true,
                    dot: true,
                    cwd: '<%= page.app %>',
                    dest: '<%= page.dist %>',
                    src: [
                        '.htaccess',
                        'image/*.{cur,ico,f4v}',
                        'font/*.*',
                        '*.html'
                    ]
                }]
            }
        },
        autoprefixer: {
            dist: {
                expand: true,
                cwd: '<%= page.dist %>/style',
                src: ['**/*.css'],
                dest: '<%= page.dist %>/style'
            }
        },
        cssmin: {
            dist: {
                expand: true,
                cwd: '<%= page.dist %>/style',
                src: ['**/*.css'],
                dest: '<%= page.dist %>/style'
            }
        },
        concurrent: {
            server: [
                'compass',
                'copy',
                'imagemin'
            ]
        },
        connect: {
            options: {
                port: 9000,
                hostname: '*',
                livereload: 35729
            },

            server: {
                options: {
                    open: true,
                    base: [
                        '<%= page.dist %>'
                    ]
                }
            }
        },
        watch: {
            livereload: {
                files: [ //下面文件的改变就会实时刷新网页
                    'app/*.html',
                    'app/template/*.html',
                    'app/style/{,*/}*.scss',
                    'app/script/{,*/}*.js',
                    'app/image/{,*/}*.{png,jpg}'
                ],
                tasks: ['hi'],
                options: {
                    livereload: '<%=connect.options.livereload%>' //监听前面声明的端口  35729
                },
            }
        }
    });
    grunt.registerTask('hi', function() {
        grunt.task.run([
            'clean:dist',
            'concurrent:server',
            'autoprefixer',
            'cssmin',
            'requirejs',
            'connect',
            'watch'
        ]);
    });
    grunt.registerTask('default', []);
    //test

};