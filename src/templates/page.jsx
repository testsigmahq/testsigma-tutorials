/* eslint-disable react/no-danger */
import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import LeftNav from '../components/LeftNav';
import 'prismjs/themes/prism-tomorrow.css';
import './page.scss';
import SideBar from '../components/SideBar';
import EditDoc from '../components/EditButton';
import SEO from '../components/seo';
import { Link } from '../../.cache/gatsby-browser-entry';
import SearchInputBox from '../components/SearchInputBox';
import MobileView from '../components/MobileView';
import Footer from '../components/Footer';
import { environment } from '../environment';
import Header from '../components/header';

export default ({ data, pageContext }) => {
  const prev = pageContext.prev
    ? {
        url: `${pageContext.prev.fields.slug}`,
        title: pageContext.prev.frontmatter.title,
      }
    : null;

  const next = pageContext.next
    ? {
        url: `${pageContext.next.fields.slug}`,
        title: pageContext.next.frontmatter.title,
      }
    : null;

  const post = data.markdownRemark;
  let contextualLinks;
  if (post.frontmatter.contextual_links) {
    contextualLinks = <SideBar links={post.frontmatter.contextual_links} />;
  }

  if (environment.isStaging()) {
    post.frontmatter.noindex = true;
  }

  return (
    <Layout>
      <SEO
        title={post.frontmatter.page_title || post.frontmatter.title}
        slug={post.fields.slug}
        canonical={post.frontmatter.canonical}
        metadesc={post.frontmatter.metadesc}
        keywords={post.frontmatter.keywords}
        social_share_summary={post.frontmatter.social_share_summary}
        social_share_desc={post.frontmatter.social_share_desc}
        social_share_image={post.frontmatter.social_share_image}
        noindex={post.frontmatter.noindex}
      />
      <Header />
      <hr />
      {/*<SubNav></SubNav>*/}
      <div className='w-full'>
        <div className='flex items-stretch'>
          <MobileView></MobileView>
          <nav className='w-1/4 max-w-sm bg-gray-50'>
            <LeftNav />
          </nav>
          <div className='flex-auto w-4/5'>
            <div className='flex items-stretch w-full'>
              <main className='w-4/5'>
                <div className='doc-page px-20 py-14'>
                  <h1>{post.frontmatter.title}</h1>
                  <span dangerouslySetInnerHTML={{ __html: post.html }} />
                </div>
              </main>
              <aside className='w-1/5 bg-white'>
                <hr className='d-block lg:hidden' />
                <div className='top-0 top-1 border-l pl-4 py-16 sticky'>
                  <div className='edit-button'>
                    <EditDoc className='items-end btn edit-button-styles flex inline-flex items-center' />
                  </div>
                  {contextualLinks}
                  <div className='float-cta rounded'>
                    <h3 className='cta-title font-semibold'>
                      See how you can release 10x faster.
                    </h3>
                    <a
                      href='/request-demo'
                      target='_blank'
                      className='signup-btn border border-primary_teal_green px-4 py-1.5 base-teal-gradient font-bold text-white rounded'
                    >
                      Book a free demo
                    </a>
                  </div>
                </div>
              </aside>
            </div>
            <div className='pagination_buttons'>
              <div
                className={prev ? 'flex justify-between' : 'overflow-hidden'}
              >
                {prev && (
                  <div className='prev_button'>
                    <Link to={prev.url}>
                      <span>Previous</span>
                      <svg
                        stroke=''
                        fill='#78757a'
                        strokeWidth='0'
                        viewBox='0 0 24 24'
                        className='css-1hyj6ne'
                        height='1.6em'
                        width='1.6em'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path d='M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z'></path>
                      </svg>
                      <h3 className='perviousLink'>{prev.title}</h3>
                    </Link>
                  </div>
                )}
                {next && (
                  <div className='next_button'>
                    <Link to={next.url}>
                      <span>Next</span>
                      <svg
                        stroke=''
                        fill='#78757a'
                        strokeWidth='0'
                        viewBox='0 0 24 24'
                        className='css-jmo9lw'
                        height='1.6em'
                        width='1.6em'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path d='M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z'></path>
                      </svg>
                      <h3 className='next_link'>{next.title}</h3>
                    </Link>
                  </div>
                )}
              </div>
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query ($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        page_title
        metadesc
        canonical
        keywords
        social_share_summary
        social_share_desc
        social_share_image
        noindex
        contextual_links {
          type
          name
          url
        }
      }
      fields {
        slug
      }
    }
  }
`;
/* eslint-enaable */
