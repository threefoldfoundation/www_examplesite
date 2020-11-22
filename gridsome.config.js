// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
    siteName: 'ThreeFold Partners',
    siteDescription: 'ThreeFold Partners',
    siteUrl: 'http://localhost:8080',
    plugins: [
      {
        use: 'gridsome-plugin-flexsearch',
        options: {
          searchFields: ['name', 'title','excerpt', 'author', 'content'],
          collections: [
            {
              typeName: 'Blog',
              indexName: 'Blog',
              fields: ['path']
            },
  
            {
              typeName: 'Project',
              indexName: 'Project',
              fields: ['path']
            },
            
            {
              typeName: 'Person',
              indexName: 'Person',
              fields: ['path']
            },
          ]
        }
      },
      {
            use: 'gridsome-plugin-tailwindcss',
            options: {
                tailwindConfig: './tailwind.config.js',
                purgeConfig: {
                    whitelist: ['svg-inline--fa', 'table', 'table-striped', 'table-bordered', 'table-hover', 'table-sm'],
                    whitelistPatterns: [/fa-$/, /blockquote$/, /code$/, /pre$/, /table$/, /table-$/]
                },
                presetEnvConfig: {},
                shouldPurge: false,
                shouldImport: true,
                shouldTimeTravel: true,
                shouldPurgeUnusedKeyframes: true,
            }
        },
        {
            use: 'gridsome-source-static-meta',
            options: {
                path: 'content/site/*.json'
            }
        },
        {
            use: '@gridsome/source-filesystem',
            options: {
                typeName: 'MarkdownPage',
                path: './content/page/**/*.md',
            }
        },
        {
            use: '@gridsome/source-filesystem',
            options: {
                typeName: 'Person',
                path: './content/person/**/*.md',
                refs: {
                    tags: {
                        typeName: 'Tag',
                        create: true
                    },
                    memberships: {
                        typeName: 'Membership',
                        create: true
                    },
                    project_ids: 'Project'
                },
            }
        },
        {
            use: '@gridsome/source-filesystem',
            options: {
                typeName: 'Blog',
                path: './content/blog/**/*.md',
                templates: {
                    BlogPost: '/news/:id'
                },
                refs: {
                    author: 'Person',
                    tags: {
                        typeName: 'Tag',
                        create: true
                    }
                }
            }
        },

        {
            use: '@gridsome/source-filesystem',
            options: {
                typeName: 'Project',
                path: './content/project/**/*.md',
                templates: {
                    Project: '/project/:id'
                },
                refs: {
                    author: 'Person',
                    members: 'Person',

                    tags: {
                        typeName: 'Tag',
                        create: true
                    }
                }
            }
        }
    ],
    transformers: {
        remark: {
            plugins: [
                '@noxify/gridsome-remark-table-align', ['@noxify/gridsome-remark-classes', {
                    'table': 'table table-striped',
                    'tableCell[align=center]': 'text-center',
                    'tableCell[align=right]': 'text-right'
                }]
            ]
        }
    },
    templates: {
        Blog: [{
            path: '/news/:id'
        }],
        Person: [{
            path: '/people/:id',
            component: '~/templates/Person.vue'
        }],
        Tag: [{
            path: '/tags/:id',
            component: '~/templates/Tag.vue'
        }],
        Membership: [{
            path: '/memberships/:id',
            component: '~/templates/Membership.vue'
        }],

        Project: [{
            path: '/project/:id',
            component: '~/templates/Project.vue'
        }],
        MarkdownPage: [{
            path: '/page/:id',
            component: '~/templates/MarkdownPage.vue'
        }],
    }
}