/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: "austinate.me",
    rssTitle: "austinate.me RSS Feed",
    siteUrl: "https://austinate.me",
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-highlight-code`,
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        // Setup an RSS object
        setup: (options) => ({
          ...options,
          // by adding a custom element for Atom link, per https://github.com/gatsbyjs/gatsby/issues/26325
          custom_elements: [
            {
              'atom:link href="https://austinate.me/rss.xml" rel="self" type="application/rss+xml"':
                null,
            },
          ],
        }),
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) => {
              return allMarkdownRemark.edges
                .filter((edge) => {
                  return edge.node.frontmatter.published
                })
                .map((edge) => {
                  return Object.assign({}, edge.node.frontmatter, {
                    description: edge.node.excerpt,
                    date: edge.node.frontmatter.date,
                    url: encodeURI(
                      site.siteMetadata.siteUrl + edge.node.fields.slug
                    ),
                    guid: site.siteMetadata.siteUrl + edge.node.fields.slug,
                    custom_elements: [{ "content:encoded": edge.node.html }],
                  })
                })
            },
            query: `
              {
                allMarkdownRemark(sort: { frontmatter: { date: DESC }}) {
                  edges {
                    node {
                      excerpt
                      html
                      fields { slug }
                      frontmatter {
                        title
                        date
                        published
                      }
                    }
                  }
                }
              }
            `,
            output: "/rss.xml",
            title: "austinate.me RSS Feed",
            match: "^/blog/",
          },
        ],
      },
    },
  ],
}
