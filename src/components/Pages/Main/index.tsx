import React from 'react';
import PageWrapper from '../../common/PageWrapper';
import style from './MainPage.module.scss';

const MainPage = () => (
  <PageWrapper>
    <main className={style.content}>
      <h1>Main content</h1>
    </main>
  </PageWrapper>
);

export default MainPage;
