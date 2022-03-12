import React from 'react';
import Footer from '../../common/Footer';
import Header from '../../common/Header';
import style from './PageWrapper.module.scss';

const PageWrapper: React.FC = ({ children }) => (
  <div className={style.page_wrapper}>
    <Header />
    {children}
    <Footer />
  </div>
);

export default PageWrapper;
