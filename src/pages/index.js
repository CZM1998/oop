import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
              点此寻找对象
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout>
      <HomepageHeader />
      <main>
        <img style={{width: '100%'}} src='https://img.czm.cool/cover/%E6%B4%9B%E5%A4%A9%E4%BE%9D%E5%9D%90%E5%9C%A8%E6%B3%95%E6%9D%96%E4%B8%8A.png'>
        </img>
      </main>
    </Layout>
  );
}
