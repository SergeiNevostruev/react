import React from 'react';
import style from './AuthPage.module.scss';
import PageWrapper from '../../common/PageWrapper';

const AuthPage = () => (
  <PageWrapper>
    <main className={style.content}>
      <h1>Main content</h1>
      {/* <img src={slon} alt="Slon" /> */}
    </main>
  </PageWrapper>
);

export default AuthPage;
