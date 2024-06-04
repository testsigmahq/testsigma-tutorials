
require('dotenv').config({
  path: `.env`,
});


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
    'gatsby-plugin-react-helmet',
    // {
    //   resolve: `gatsby-plugin-s3`,
    //   options: {
    //     bucketName: process.env.BUCKET_NAME,
    //     protocol: "https",
    //     hostname: process.env.HOST_NAME,
    //     generateRedirectObjectsForPermanentRedirects: true
    //   },
    // },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: `gatsby-plugin-ts-freshchat`,
      options: {
        token: process.env.FRESHCHAT_TOKEN,
        host: "https://wchat.freshchat.com",
        appEmbedUrl: "https://app.testsigma.com/ui/dashboard",
      },
    },
    // {
    //   resolve: `gatsby-plugin-google-analytics`,
    //   options: {
    //     trackingId: process.env.GA_TRACKING_ID,
    //     head: false,
    //     anonymize: true,
    //     respectDNT: true,
    //     enableWebVitalsTracking: true,
    //   },
    // },
    // npm
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
          },
          {
            resolve: 'gatsby-plugin-env-variables',
            options: {
              allowList: ['TYPESENSE_HOST', 'TYPESENSE_PORT', 'TYPESENSE_PROTOCOL', 'TYPESENSE_API_KEY', "TYPESENSE_SEARCH_API_KEY", "TYPESENSE_COLLECTION"],
            },
          }
        ],
      },
    }
  ],
};
