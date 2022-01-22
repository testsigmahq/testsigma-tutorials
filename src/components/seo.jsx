/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

function SEO({
                 lang, meta, title, slug,
             }) {
    const { site } = useStaticQuery(
        graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `,
    );

    return (
        <Helmet
            htmlAttributes={{
                lang,
            }}
            title={title}
            titleTemplate={`%s | ${site.siteMetadata.title}`}
            meta={[
                {
                    name: 'google-site-verification',
                    content: '58TM3lGyGn6c2Bj0PvPQSNzrd9_yBsHs2BjJ6KMHlRU',
                },
                {
                    property: 'og:url',
                    content: 'https://testsigma.com/docs/',
                },
                {
                    property: 'og:title',
                    content: title,
                },
                {
                    property: 'og:site_name',
                    content: 'Testsigma Docs',
                },
                {
                    property: 'og:image',
                    content: 'https://website-static.testsigma.com/assets/home/homepage-linkedin.png',
                },
                {
                    property: 'og:type',
                    content: 'website',
                },
                {
                    name: 'twitter:card',
                    content: 'summary',
                },
                {
                    name: 'twitter:creator',
                    content: site.siteMetadata.author,
                },
                {
                    name: 'twitter:title',
                    content: title,
                },
                {
                    property: 'twitter:domain',
                    content: 'https://testsigma.com/docs/',
                },
                {
                    property: 'og:image',
                    content: 'https://website-static.testsigma.com/assets/home/homepage-linkedin.png',
                },
                {
                    property: 'twitter:site',
                    content: '@testsigmainc',
                },
            ].concat(meta)}
        >
            {/* fonts */}
            <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
            <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
            <link crossOrigin rel="preconnect" href="https://fonts.gstatic.com" />
            <link href="https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@300;400&display=swap" rel="stylesheet" />
            {/* <link href="https://fonts.googleapis.com/css?family=Roboto:400,500&display=swap" rel="stylesheet" /> */}
            {/* <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap" rel="stylesheet" /> */}
            {/* Bootstrap */}
            {/* <link rel="dns-prefetch" href="https://stackpath.bootstrapcdn.com" /> */}
            {/* <link crossOrigin rel="preconnect" href="https://stackpath.bootstrapcdn.com" /> */}
            {/* <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossOrigin="anonymous" /> */}
            <link rel="canonical" href={`https://testsigma.com${slug}`} />
            {/* Algolia Instantsearch IE11 support v3 */}
            {/* <script src="https://polyfill.io/v3/polyfill.min.js?features=default,Array.prototype.find,Array.prototype.includes" /> */}
            {/*  */}
            {/* Algolia Instantsearch IE11 support v4 */}
            <link rel="dns-prefetch" href="https://polyfill.io" />
            <link crossOrigin rel="preconnect" href="https://polyfill.io" />
            <script src="https://polyfill.io/v3/polyfill.min.js?features=default%2CArray.prototype.find%2CArray.prototype.includes%2CPromise%2CObject.assign%2CObject.entries" />
            {/* Algolia API v4 IE11 support  */}
            <script src="https://polyfill.io/v3/polyfill.min.js?features=Promise%2CObject.entries%2CObject.assign" />

        </Helmet>
    );
}

SEO.defaultProps = {
    lang: 'en',
    meta: [],
};

SEO.propTypes = {
    lang: PropTypes.string,
    meta: PropTypes.arrayOf(PropTypes.object),
    title: PropTypes.string.isRequired,
};

export default SEO;
