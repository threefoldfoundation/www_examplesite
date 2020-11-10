// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Alliance for a Conscious Internet',
  siteDescription: 'ThreeFold Partners',
  siteUrl: 'http://localhost:8080',
  plugins: [
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
        typeName: 'Person',
        path: './content/person/**/*.md',
        refs: {
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
        typeName: 'Blog',
        path: './content/blog/**/*.md',
        templates: {
          BlogPost: '/blog/:id'
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
        '@noxify/gridsome-remark-table-align',
        ['@noxify/gridsome-remark-classes', {
          'table': 'table table-striped',
          'tableCell[align=center]': 'text-center',
          'tableCell[align=right]': 'text-right'
        }]
      ]
    }
  },
  templates: {
    Blog: [{
      path: '/blog/:id'
    }],
    Person: [{
      path: '/people/:id',
      component: '~/templates/Person.vue'
    }],
    Tag: [{
      path: '/tags/:id',
      component: '~/templates/Tag.vue'
    }],
    Project: [{
      path: '/project/:id',
      component: '~/templates/Project.vue'
    }],
  }
}
