import {Route} from 'react-router-dom';
import {Switch, Redirect} from 'react-router';

import Header from './components/Header/Header.jsx';
import LargeScreenDisplay from './components/LargeScreen/LargeScreenDisplay/LargeScreenDisplay.jsx';
import IntroduceDisplay from './components/Introduce/IntroduceDisplay/IntroduceDisplay.jsx';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <Switch>
          <Route path='/home' component={LargeScreenDisplay} />
          <Route path='/introduceHome' component={IntroduceDisplay} />
          <Redirect to="/introduceHome"></Redirect>
      </Switch>
    </div>
  );
}

export default App;
