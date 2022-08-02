import classes from './App.module.css';
import Header from './header';
import Footer from './footer';
import Main from './main';
import { useCallback, useState } from 'react';

const App = () => {
const [isOffset, toggleOffset] = useState(false);

const className = isOffset? classes.appOffset : classes.app;

const handleToggle = useCallback(() => toggleOffset((prev) => {
  if (!prev) {
      document.body.className = 'toggle';
      return !prev;
  }  document.body.className = '';
}
), [toggleOffset]);

  return (
    <div className={className}>
      <Header isOffset={isOffset} toggle={handleToggle}  />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
