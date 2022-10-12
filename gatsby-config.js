
require('dotenv').config({
  path: `.env`,
});

const pageQuery = `{
  docs: allMarkdownRemark(
    filter: {
      fileAbsolutePath: { regex: "/tutorials/" },
    }
  ) {
    edges {
      node {
        headings(depth: h3) {
          value
        }
        objectID: id
        frontmatter {
          title
          search_keyword
          contextual_links {
            type
            name
            url
          }
        }
        fields {
          slug
        }
        excerpt(
          pruneLength: 6700
        )
      }
    }
  }
}`;


function pageToAlgoliaRecord({ node: { id, frontmatter, ...rest } }) {
  return {
    objectID: id,
    ...frontmatter,
    ...rest,
  };
}

const settings = { attributesToSnippet: ['excerpt:20'] };

const queries = [
  {
    query: pageQuery,
    transformer: ({ data }) => data.docs.edges.map(pageToAlgoliaRecord),
    indexName: 'OS Docs',
    settings,
  },
];


module.exports = {
  assetPrefix: process.env.ASSET_HOST,
  siteMetadata: {
    title: 'Testsigma Tutorials',
    description: '',
    author: 'Testsigma',
    siteUrl: 'https://testsigma.com/tutorials/'
  },
  plugins: [
    "gatsby-plugin-postcss",
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    "gatsby-transformer-remark",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: `gatsby-plugin-s3`,
      options: {
        bucketName: process.env.BUCKET_NAME,
        protocol: "https",
        hostname: process.env.HOST_NAME,
        generateRedirectObjectsForPermanentRedirects: true
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: 'gatsby-plugin-algolia',
      options: {
        appId: process.env.GATSBY_ALGOLIA_APP_ID,
        apiKey: process.env.ALGOLIA_ADMIN_KEY,
        queries,
        chunkSize: 10000, // default: 1000
        enablePartialUpdates: true, // only index new, changed, deleted records
        matchFields: ['excerpt', 'contextual_links', 'search_keyword', 'headings', 'fields', 'modified'],
        concurrentQueries: false,
      },
    },
    {
      resolve: `gatsby-plugin-freshchat`,
      options: {
        token: process.env.FRESHCHAT_TOKEN,
        host: "https://wchat.freshchat.com",
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GA_TRACKING_ID,
        head: false,
        anonymize: true,
        respectDNT: true,
        enableWebVitalsTracking: true,
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [
          process.env.GTAG_TRACKING_ID_FOR_GA4, // Google Analytics 4
          process.env.GTAG_TRACKING_ID_FOR_GTAG, // Google Tag Manager
        ],
        pluginConfig: {
          head: false,
          respectDNT: true,
        },
      }
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-autolink-headers`,
            options: {
              elements: [`h2`],
            },
          },
          'gatsby-remark-check-links',
          'gatsby-remark-responsive-iframe',
          {
            resolve: 'gatsby-remark-prismjs',
            options: {
              classPrefix: 'language-',
              inlineCodeMarker: null,
              aliases: {},
              showLineNumbers: false,
              noInlineHighlight: false,
            },
          },
          {
            resolve: "gatsby-remark-custom-blocks",
            options: {
              blocks: {
                danger: {
                  classes: "alert alert-danger",
                  title: "optional",
                },
                info: {
                  classes: "alert alert-info",
                  title: "optional",
                },
              },
            },
          }
        ],
      },
    }
  ],
};
