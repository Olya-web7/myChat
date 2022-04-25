import './App.css';
import Chat from './Chat';
import Sidebar from './Sidebar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {
  return (
    <div className="app">
      <div className="app__body">
        <Router>
          <Switch>
            <Route path='/app'>
              <Sidebar />
              <Chat />
            </Route>
            <Route path='/'>
              <h1>home</h1>
            </Route>
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
