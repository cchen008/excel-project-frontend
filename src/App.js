import './App.css';
import ProfileNavBar from './components/ProfileNavBar';
import { Container } from 'react-bootstrap';
import ProfileList from './components/ProfileList';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <ProfileNavBar />
      
      <Container>
        <Router>
          <Switch>
            <Route path="/">
              <ProfileList />
            </Route>
          </Switch>
        </Router>
      </Container>
    </div>
    
  );
}

export default App;
