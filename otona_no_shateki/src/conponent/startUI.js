import logo from './logo.svg';
import './App.css';
import React from 'react';
import SlideRoutes from 'react-slide-routes';
import { Route, NavLink, useLocation} from 'react-router-dom';

const Home = () => <div style={styles.home}>ゲームスタート</div>;
const About = () => <div style={styles.about}>ゲーム画面</div>;

const styles = {
  home: {
    color: '#fff',
    fontSize: '64px',
    background: 'rgba(255, 100, 0)',
    
  },
  about: {
    color: '#fff',
    fontSize: '64px',
    background: 'rgba(0, 150, 255)',
  },
  contact: {
    color: '#fff',
    fontSize: '64px',
    background: 'rgba(44, 219, 88)',
  },
}

const App = () => {
  const location = useLocation();

  return (
    <>
      <SlideRoutes location={location} duration={2000}>
        <Route path="/" component={Home} exact />
        <Route path="/about" component={About} />

      </SlideRoutes>

      <nav>
        <NavLink to="/" exact>戻る</NavLink>
        <NavLink to="/about">ゲームスタート</NavLink>

      </nav>
    </>
  );
};

export default App;
