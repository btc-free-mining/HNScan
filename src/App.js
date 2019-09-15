import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import HomeScreen from './screens/Home/HomeScreen';
import AirdropClaimScreen from './screens/AirdropClaim/AirdropClaimScreen';
import BlocksScreen from './screens/Blocks/BlocksScreen';
import NamesScreen from './screens/Names/NamesScreen';
import NodeStatusScreen from './screens/NodeStatus/NodeStatusScreen';
import PeersScreen from './screens/Peers/PeersScreen';

import ThemeContext from './contexts/ThemeContext';

import NavbarComponent from './components/Navbar/NavbarComponent';
import FooterComponent from './components/Footer/FooterComponent';


import './App.scss';

function App() {
  return (
    <ThemeContext>
      <div>
        <NavbarComponent />
        <Router>
          <Route path="/" exact component={ HomeScreen } />
          <Route path="/airdropclaim" exact component={ AirdropClaimScreen }/>
          <Route path="/blocks" exact component={ BlocksScreen }/>
          <Route path="/names" exact component={ NamesScreen }/>
          <Route path="/peers" exact component={ PeersScreen }/>
          <Route path="/status" exact component={ NodeStatusScreen }/>
          {/* <Route path="*" component={NotFoundScreen}/> */}
        </Router>
        <FooterComponent />
      </div>
    </ThemeContext>
  );
}

export default App;
