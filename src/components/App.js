import React, { Fragment } from 'react';
import './App.css';
import Header from './header/header.module';
import Footer from './footer/footer.module';
import Main from './mainContent/mainContent.module';

const App = () => {
  return (
    <Fragment>
      <Header />
      <Main />
      <Footer />
    </Fragment>
  );
}

export default App;
