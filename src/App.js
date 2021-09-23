import './App.css';
import ProfileList from './components/ProfileList';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
        <Router>
          <Switch>
            <Route path="/">
              <ProfileList />
            </Route>
          </Switch>
        </Router>
    </>
    
  );
}

export default App;
