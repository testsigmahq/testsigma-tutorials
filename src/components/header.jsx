import React, { useEffect, useState } from 'react';
import SearchInputBox from './SearchInputBox';
import tsLogo from '../components/images/testsigma-logo-v3-dark.svg';

const Header = () => {
  const [isHomepage, setIsHomepage] = useState(false);

  useEffect(() => {
    setIsHomepage(window.location.pathname === '/tutorials/');
  }, []);
  return (
    <header id='root_header'>
      <div className='flex items-stretch header-container'>
        <a href={'/'} className='logo-block flex max-w-sm w-1/6'>
          <img src={tsLogo} alt='Testsigma' className='ml-10 my-6' />
        </a>
        <nav className='flex-auto flex  items-center'>
          <nav className='flex w-7/12'>
            <div className='flex items-stretch font-semibold ml-20'>
              <a
                className='btn btn-ghost btn-sm pr-2 rounded-btn'
                href={'/docs/'}
              >
                Docs
              </a>
              {isHomepage ? (
                <span className='btn btn-ghost btn-sm border-b-2 border-primary_teal_green rounded-btn ml-10 text-primary_teal_green'>
                  Tutorials
                </span>
              ) : (
                <a
                  className='btn btn-ghost btn-sm border-b-2 border-primary_teal_green rounded-btn ml-10 text-primary_teal_green'
                  href='/tutorials/'
                >
                  Tutorials
                </a>
              )}
              <a
                className='btn btn-ghost btn-sm rounded-btn ml-10'
                target={'_blank'}
                href={'https://github.com/Testsigmahq/testsigma/'}
              >
                GitHub
              </a>
              <a
                className='btn btn-ghost btn-sm rounded-btn ml-10'
                href={'https://discord.com/invite/5caWS7R6QX'}
              >
                Discord
              </a>
              <a
                className='btn btn-ghost btn-sm rounded-btn ml-10'
                href={'https://testsigma.com/pricing'}
              >
                Enterprise
              </a>
              <a
                className='btn btn-ghost btn-sm rounded-btn ml-10'
                href={'https://testsigma.com/'}
              >
                Testsigma Cloud
              </a>
            </div>
          </nav>
          <div className='search-block relative flex items-center justify-between w-2/5 pr-9'>
            <SearchInputBox></SearchInputBox>
            <a
              id={'signup-btn'}
              target={'_blank'}
              className='border border-primary_teal_green px-4 py-1.5 text-secondary_teal_green rounded'
              href='/signup'
            >
              GET STARTED FREE
            </a>
            <a
              id={'signup-btn'}
              target={'_blank'}
              className='border border-primary_teal_green px-4 py-1.5 base-teal-gradient text-white rounded'
              href='/request-demo'
            >
              BOOK A DEMO
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
