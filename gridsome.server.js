// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

var private = process.env.SHOWPRIVATE
if (private == "true")
    private = null
else if (private == "false")
    private = 1

module.exports = function(api) {
    api.loadSource(({
        addCollection
    }) => {
        // Use the Data Store API here: https://gridsome.org/docs/data-store-api/
    })

    api.createPages(({
        createPage
    }) => {
        // Use the Pages API here: https://gridsome.org/docs/pages-api/
    })

    api.onCreateNode(options => {
        if (options.internal.typeName === 'Blog') {

            options.tags = (typeof options.tags === 'string') ? options.tags.split(',').map(string => string.trim()) : options.tags;
            options.author = (typeof options.author === 'string') ? options.author.split(',').map(string => string.trim()) : options.author;
            return {
                ...options
            };
        }

        if (options.internal.typeName === 'Project') {
            options.tags = (typeof options.tags === 'string') ? options.tags.split(',').map(string => string.trim()) : options.tags;
            options.countries = (typeof options.countries === 'string') ? options.countries.split(',').map(string => string.trim()) : options.countries;
            options.cities = (typeof options.cities === 'string') ? options.cities.split(',').map(string => string.trim()) : options.cities;
            options.members = (typeof options.members === 'string') ? options.members.split(',').map(string => string.trim()) : options.members;
            options.author = (typeof options.author === 'string') ? options.author.split(',').map(string => string.trim()) : options.author;
            return {
                ...options
            };
        }


        if (options.internal.typeName === 'Person') {
            options.project_ids = (typeof options.project_ids === 'string') ? options.project_ids.split(',').map(string => string.trim()) : options.project_ids;
            options.memberships = (typeof options.memberships === 'string') ? options.memberships.split(',').map(string => string.trim()) : options.memberships;
            options.countries = (typeof options.countries === 'string') ? options.countries.split(',').map(string => string.trim()) : options.countries;
            options.cities = (typeof options.cities === 'string') ? options.cities.split(',').map(string => string.trim()) : options.cities;
            return {
                ...options
            };
        }
    })

    api.createPages(({ createPage }) => {
        createPage({
            path: '/people',
            component: './src/templates/People.vue',
            context: {
                private: private
            }
        })
    })

    api.createPages(({ createPage }) => {
        createPage({
            path: '/search',
            component: './src/templates/Search.vue',
            context: {
                private: private
            }
        })
    })

    api.createPages(({ createPage }) => {
        createPage({
            path: '/projects',
            component: './src/templates/Projects.vue',
            context: {
                private: private
            }
        })
    })

    api.createPages(({ createPage }) => {
        createPage({
            path: '/newsroom',
            component: './src/templates/NewsRoom.vue',
            context: {
                private: private
            }
        })
    })

    api.createPages(async({
        graphql,
        createPage
    }) => {
        // Use the Pages API here: https://gridsome.org/docs/pages-api
        const {
            data
        } = await graphql(`{
      allBlog {
        edges {
          previous {
            id
          }
          next {
            id
          }
          node {
            id
            path
          }
        }
      }
    }
    `);

        data.allBlog.edges.forEach(function(element) {
            createPage({
                path: element.node.path,
                component: './src/templates/BlogPost.vue',
                context: {
                    previousElement: (element.previous) ? element.previous.id : '##empty##',
                    nextElement: (element.next) ? element.next.id : '##empty##',
                    id: element.node.id
                }
            });

        });

    });
}