import React from 'react';
import LeftNavbar from './components/LeftNavbar';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import SuccessPage from './pages/SuccessPage';
import HomePage from './pages/HomePage';
import ReportPage from './pages/ReportsPage';
import RegisterPage from './pages/RegisterPage';


const App: React.FC<{}> = (props) => {
  return (
    <>
      <BrowserRouter>
        <LeftNavbar />
        <Switch>
          <Route path='/' exact component={HomePage} />
          <Route path='/reports' component={ReportPage} />
          <Route path='/register' component={RegisterPage} />
          <Route path='/success' component={SuccessPage} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
