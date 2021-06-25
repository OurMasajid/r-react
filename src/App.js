// import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

//custom components
import PrayerDailyTv1 from './code/prayer/daily-tv1'
import Home from './code/pages/home';
import MasjidIndex from './code/pages/masjid';
import Login from './code/pages/user/login';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/prayer-tv1">
          <PrayerDailyTv1 />
        </Route>
        <Route path="/masjid">
          <MasjidIndex />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        {/*
      <Route path="/dashboard">
        <Dashboard />
      </Route> */}
      </Switch>
    </Router>
  );
}

export default App;
